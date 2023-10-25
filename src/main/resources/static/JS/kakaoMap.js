// 지도 초기 화면 설정
const container = document.getElementById("map");
// level이 높을수록 지도를 축소함.
const options = {
	center: new kakao.maps.LatLng(33.7884269497, 127.5),
	level: 12,
};
const map = new kakao.maps.Map(container, options);

const clustererOptions = {
	averageCenter: true,
	gridSize: 50,
	minLevel: 15,
};

// 지도 컨트롤러 생성
// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
const mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성
const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// ---------------------------------------------------------------------------------

// 마커 선언
const marker_radio = "";
let marker_earthquake = "";

// 생성된 마커 저장 배열(테스트 중)
const markerArray = [];

// 마커 정보 불러오기
const eqYearPush = async () => {
	// year로 인식할 input 구현해야 합니다.
	// const year = document.querySelector("#yeartest").value;
	const year = "2023";
	const data = await fetch(`/yearsearch?year=${year}`);
	const res = await data.text();
	const eqJson = JSON.parse(res); // json 형식으로 읽기

	// i 번째 json 형태에서 필요한 데이터 가져오기
	for (let i = 0; i < eqJson.length; i++) {
		let eqLat = eqJson[i].lat;
		let eqLon = eqJson[i].lon;
		let eqScale = eqJson[i].eqscale; // 규모
		let eqMagnitude = eqJson[i].magnitude; // 진도
		let eqLocation = eqJson[i].location; // 진앙지 주소
		let eqDeep = eqJson[i].deep; // 진원 깊이
		let eqYear = eqJson[i].eqyear; // 지진 발생일(년.월.일.시간)
		let eqMonth = eqJson[i].eqmonth;
		let eqDay = eqJson[i].eqday;
		let eqAntemeri = eqJson[i].antemeri; // AM, PM
		let eqTime = eqJson[i].eqtime;

		// AM, PM -> 오전, 오후로 변경
		if (eqAntemeri == "AM") {
			eqAntemeri = "오전";
		} else {
			eqAntemeri = "오후";
		}

		// eqTime의 초 단위 삭제
		if (eqTime.substr(1, 1) == ":") {
			eqTime = eqTime.substr(0, 4);
		} else {
			eqTime = eqTime.substr(0, 5);
		}

		// 지진 마커 이미지(진도에 따라 마커 이미지 변경)
		if (eqScale >= 3) {
			marker_earthquake = "../img/marker_earthquake_red.png"; // 진도 3 이상
		} else if (eqScale >= 2) {
			marker_earthquake = "../img/marker_earthquake_yellow.png"; // 진도 2 ~ 2.9
		} else {
			marker_earthquake = "../img/marker_earthquake.png"; // 진도 1 ~ 1.9
		}

		// 마커 이미지의 이미지 크기
		const imageSize = new kakao.maps.Size(13, 13);
		// 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
		const imageOption = { offset: new kakao.maps.Point(10, 35) };
		let markerImage = new kakao.maps.MarkerImage(
			marker_earthquake,
			imageSize,
			imageOption
		);

		// 마커를 생성
		// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
		let markerPosition = new kakao.maps.LatLng(eqLat, eqLon);
		let marker = new kakao.maps.Marker({
			image: markerImage, // 마커 이미지
			position: markerPosition,
		});

		// 커스텀 오버레이에 표시할 컨텐츠

		// let content =
		// 	'<div class="wrap">' +
		// 	'    <div class="info">' +
		// 	'        <div class="body">' +
		// 	'            <div class="desc">' +
		// 	`                <div class="ellipsis">` +
		// 	`							<span class="eqDetail">발생 일시: </span>${eqYear}년 ${eqMonth}월 ${eqDay}일, ${eqAntemeri} ${eqTime}` +
		// 	`						</div>` +
		// 	`		           <div class="ellipsis">` +
		// 	`							<span class="eqDetail">위도: </span>${eqLat} | <span class="eqDetail">경도: </span>${eqLon}` +
		// 	`						</div>` +
		// 	`                <div class="ellipsis">` +
		// 	`							<span class="eqDetail">발생지: </span>${eqLocation}` +
		// 	`						</div>` +
		// 	`                <div class="ellipsis">` +
		// 	`							<span class="eqDetail">규모: </span>${eqScale}, <span class="eqDetail">진도:</span> ${eqMagnitude}, <span class="eqDetail">진앙 깊이:</span> ${eqDeep}km	` +
		// 	`						</div>` +
		// 	"            </div>" +
		// 	"        </div>" +
		// 	"    </div>" +
		// 	"</div>";

		// 마커 위에 커스텀 오버레이를 표시
		// 마커를 중심으로 커스텀 오버레이를 표시하기 위한 CSS

		// const overlay = new kakao.maps.CustomOverlay({
		// 	content: content,
		// 	map: map,
		// 	position: marker.getPosition(),
		// });

		// 마커를 마우스를 올렸을 때 커스텀 오버레이를 표시합니다
		// kakao.maps.event.addListener(marker, "mouseover", function (event) {
		// 	overlay.setMap(map);
		// });

		// 마우스가 마커 밖으로 나가면 오버레이를 끕니다.
		// kakao.maps.event.addListener(marker, "mouseout", function (event) {
		// 	overlay.setMap(null);
		// });

		const obj = {
			eqLat,
			eqLon,
			eqScale,
			eqMagnitude,
			eqLocation,
			eqDeep,
			eqYear,
			eqMonth,
			eqDay,
			eqAntemeri,
			eqTime,
			marker_earthquake,
		};
		// 마커 데이터 배열로 저장
		markerArray.push(obj);

		// 마커를 지도에 세팅
		// marker.setMap(map);
		marker.setMap(null);
		// overlay.setMap(null);
	}
};

eqYearPush();

// 미리 저장한 마커 내용 불러오기
const actionEqYear = () => {
	for (let i = 0; i < markerArray.length; i++) {
		// 마커 이미지의 이미지 크기
		const imageSize = new kakao.maps.Size(13, 13);
		// 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
		const imageOption = { offset: new kakao.maps.Point(10, 35) };
		let markerImage = new kakao.maps.MarkerImage(
			markerArray[i].marker_earthquake,
			// marker_earthquake,
			imageSize,
			imageOption
		);

		// 마커를 생성
		// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
		// let markerPosition = new kakao.maps.LatLng(eqLat, eqLon);
		let markerPosition = new kakao.maps.LatLng(
			markerArray[i].eqLat,
			markerArray[i].eqLon
		);
		let marker = new kakao.maps.Marker({
			image: markerImage, // 마커 이미지
			position: markerPosition,
		});

		let content =
			'<div class="wrap">' +
			'    <div class="info">' +
			'        <div class="body">' +
			'            <div class="desc">' +
			`                <div class="ellipsis">` +
			`							<span class="eqDetail">발생 일시: </span>${markerArray[i].eqYear}년 ${markerArray[i].eqMonth}월 ${markerArray[i].eqDay}일, ${markerArray[i].eqAntemeri} ${markerArray[i].eqTime}` +
			`						</div>` +
			`		           <div class="ellipsis">` +
			`							<span class="eqDetail">위도: </span>${markerArray[i].eqLat} | <span class="eqDetail">경도: </span>${markerArray[i].eqLon}` +
			`						</div>` +
			`                <div class="ellipsis">` +
			`							<span class="eqDetail">발생지: </span>${markerArray[i].eqLocation}` +
			`						</div>` +
			`                <div class="ellipsis">` +
			`							<span class="eqDetail">규모: </span>${markerArray[i].eqScale}, <span class="eqDetail">진도:</span> ${markerArray[i].eqMagnitude}, <span class="eqDetail">진앙 깊이:</span> ${markerArray[i].eqDeep}km	` +
			`						</div>` +
			"            </div>" +
			"        </div>" +
			"    </div>" +
			"</div>";

		// 마커 위에 커스텀 오버레이를 표시
		// 마커를 중심으로 커스텀 오버레이를 표시하기 위한 CSS

		const overlay = new kakao.maps.CustomOverlay({
			content: content,
			map: map,
			position: marker.getPosition(),
		});

		// 마커를 마우스를 올렸을 때 커스텀 오버레이를 표시합니다
		kakao.maps.event.addListener(marker, "mouseover", function (event) {
			overlay.setMap(map);
		});

		// 마우스가 마커 밖으로 나가면 오버레이를 끕니다.
		kakao.maps.event.addListener(marker, "mouseout", function (event) {
			overlay.setMap(null);
		});

		// 마커를 지도에 세팅
		// marker.setMap(map);
		marker.setMap(map);
		overlay.setMap(null);
	}
	console.log("Eq action done!");
};
