const eqGraph = [];

// 그래프 생성

function eqGraMake(bounds, imgSrc) {
	this.bounds = bounds;
	//div 생성
	var node = (this.node = document.createElement("div"));
	node.className = "node"; //클래스명 부여
	//div 생성
	var gradientDiv = (this.div = document.createElement("div"));
	gradientDiv.style.position = "unset"; //포지션없음
	gradientDiv.style.opacity = 0.6; //투명도 부여
	//img태그 생성
	var img = (this.img = document.createElement("img"));
	img.style.position = "absolute"; //style= 'position :absolute'
	img.src = imgSrc;
	img.className = "contourMap"; // contourMap클래스명 부여

	node.appendChild(gradientDiv);
	gradientDiv.appendChild(img);
}
// "AbstractOverlay":#AbstractOverlay 상속. 프로토타입 체인을 연결한다..
eqGraMake.prototype = new kakao.maps.AbstractOverlay();

// 필수 구현 메소드.
// AbstractOverlay의 getPanels() 메소드로 MapPanel 객체를 가져오고
// 거기에서 오버레이 레이어를 얻어 생성자에서 만든 엘리먼트를 자식 노드로 넣어준다.
eqGraMake.prototype.onAdd = function () {
	var panel = this.getPanels().overlayLayer;
	panel.appendChild(this.node);
};

// 필수 구현 메소드.
// 생성자에서 만든 엘리먼트를 오버레이 레이어에서 제거한다.
eqGraMake.prototype.onRemove = function () {
	this.node.parentNode.removeChild(this.node);
};

// 필수 구현 메소드.
// 지도의 속성 값들이 변화할 때마다 호출된다. (zoom, center, mapType)
// 엘리먼트의 위치를 재조정 해 주어야 한다.
eqGraMake.prototype.draw = function () {
	var projection = this.getProjection();
	var ne = projection.pointFromCoords(this.bounds.getNorthEast());
	var sw = projection.pointFromCoords(this.bounds.getSouthWest());
	//그림의 범위, 영역지정입니다 (수학식이니 깊게 생각할 필요 없음)
	var width = ne.x - sw.x;
	var height = sw.y - ne.y;

	this.img.style.top = ne.y + "px";
	this.img.style.left = sw.x + "px";
	this.img.style.width = width + "px";
	this.img.style.height = height + "px";
};

// 그래프를 png로 변경
//초기값 좌상단 [124.20796222050159, 42.366046008446546]
//좌상단 1/2 [124.39396537459614 ,37.64945785060459]
//우하단 [130.14530720470964, 32.91305919195217]
// LatLng, LatLngBounds 를 사용하는 코드로 변경해야 함.
var sw = new kakao.maps.LatLng(42.366046008446546, 124.20796222050159); //37.450701, 126.570667
ne = new kakao.maps.LatLng(32.91305919195217, 130.14530720470964);

var bounds = new kakao.maps.LatLngBounds(sw, ne);

var overlay = new eqGraMake(bounds, "");
overlay.setMap(null);

///Contourmap 제작 함수 부분입니다.
const eqGraPng = async () => {
	const year = "2023"; //year 별로 조회하는기능입니다.
	//이곳에 연결해서 연도별 조회가 가능합니다.
	console.log("눌림");
	const yeardata = await fetch(`/yearsearch?year=${year}`);
	const res = await yeardata.text();
	const eqJson = JSON.parse(res); // json 형식으로 읽기

	//초기값 좌상단 [124.20796222050159, 42.366046008446546]
	//우상단 [130.57113958661236,42.34440918488924]
	//좌상단 1/2 [124.39396537459614 ,37.64945785060459]
	//우상단 1/2[130.33345363097027, 37.631128711264275]

	//우하단 [130.14530720470964, 32.91305919195217]
	let coordival = [];
	let coordinates = [
		[124.20796222050159, 42.366046008446546],
		[130.14530720470964, 32.91305919195217],
		[124.20796222050159, 32.91305919195217],
		[130.57113958661236, 42.34440918488924], //우하단
	];

	let zValues = [1.2, 1.2, 1.2, 1.2]; //좌상단,우하단,null,null값넣어줌
	// i 번째 json 형태에서 필요한 데이터 가져오기
	for (let i = 0; i < eqJson.length; i++) {
		let eqLat = eqJson[i].lat;
		let eqLon = eqJson[i].lon;
		let eqScale = eqJson[i].eqscale; // 규모

		coordival = [eqLon, eqLat];
		coordinates.push(coordival);
		zValues.push(eqScale);
	}

	// coordinates에서 고유한 x,y좌표 추출 , x와 y 배열 추출 및 오름차순 정렬
	// coord => coord[1]: 각 좌표 쌍에서 y 좌표만 추출합니다.
	const Xarray = Array.from(new Set(coordinates.map((coord) => coord[0]))).sort(
		(a, b) => a - b
	);
	const Yarray = Array.from(new Set(coordinates.map((coord) => coord[1]))).sort(
		(a, b) => a - b
	);

	// z 배열을 초기화하고, y배열의 크기만큼 길이산정, x배열 길이만큼 null로 채우기,(y두번써도됨)
	const Zarray = Array.from({ length: Yarray.length }, () =>
		Array(Xarray.length).fill(null)
	);

	// z 배열에 값을 할당
	for (let index = 0; index < coordinates.length; index++) {
		const [xCoord, yCoord] = coordinates[index];
		const zValue = zValues[index];
		const i = Yarray.indexOf(yCoord);
		const j = Xarray.indexOf(xCoord);
		Zarray[i][j] = zValue;
	}
	console.log(Zarray);

	//배열 생성하는 부분입니다. 하단부터는 plotly 라이브러리 생성 영역입니다.
	var trace1 = {
		z: Zarray,
		x: Xarray,
		y: Yarray,

		connectgaps: true,
		zsmooth: "best",
		type: "heatmap", //옵션 histogram2dcontour, contour, heatmap

		showscale: false,
		autocolorscale: "hot",
		// reversescale: true, zmax: 2.5, zmin: -2.5
		// 바꿀수 있는 옵션들
		//colorscale: [[0, "rgb(  0,  0,  0)"], [0.3, "rgb(90,  0,  0)"], [0.6, "rgb//(180,0,  0)"], [1, "rgb(255,0,0)"]],
		//name: 'density',
		//ncontours: 20,
		//colorscale: 'Hot',
		//reversescale: true,
		//showscale: false,
		//type: 'histogram2dcontour'
	};

	var data = [trace1];

	var layout = {
		autosize: false,

		width: 500,
		height: 1000,
		margin: {
			l: 0,
			r: 0,
			b: 0,
			t: 0,
			pad: 0,
		},

		//title: 'Simple Contour Plot'
	};

	Plotly.newPlot("contourMap", data, layout);

	Plotly.toImage("contourMap", {
		format: "png",
		width: 500,
		height: 1000,
	}).then(function (dataUrl) {
		var img = new Image();
		img.src = dataUrl;

		var overlay = new eqGraMake(bounds, dataUrl);
		overlay.setMap(null);

		eqGraph.push(overlay);
		//console.log(dataUrl)
		//document.querySelector('.contourMap').src = img;
	});
	console.log("Pushed eqGraph Img");
};
eqGraMake();
eqGraPng();

const eqGraAction = () => {
	overlay.setMap(map);
};
const eqGraClose = () => {
	overlay.setMap(null);
};
