// 마커 이미지 변수
const marker_weather = "";

// 생성된 마커 저장하는 배열
const weatherMarkers = [];

// 날씨 api json으로 불러오기
const weatherDataPush = async () => {
	const now = new Date();
	let year = now.getFullYear();
	let month = now.getMonth() + 1;
	let date = now.getUTCDate();
	let hours = now.getHours() - 1;
	let min = now.getMinutes();
	if (min >= 45) min = "30";
	else if (min >= 15) min = "00";
	else min = "30";

	let base_date = String(year) + String(month) + String(date);
	let base_time = String(hours) + min;

	const location = [
		[60, 127, "서울", 126.980008333333, 37.5635694444444],
		[98, 76, "부산", 129.076952777777, 35.1770194444444],
		[89, 90, "대구", 128.603552777777, 35.8685416666666],
		[55, 124, "인천", 126.707352777777, 37.4532333333333],
		[58, 74, "광주", 126.853363888888, 35.1569749999999],
		[67, 100, "대전", 127.386566666666, 36.3471194444444],
		[102, 84, "울산", 129.313688888888, 35.5354083333333],
		[60, 120, "경기", 127.011688888888, 37.2718444444444],
		[69, 107, "충북", 127.493586111111, 36.6325],
		[68, 100, "충남", 127.422955555555, 36.3238722222222],
		[63, 89, "전북", 127.111052777777, 35.817275],
		[51, 67, "전남", 126.465, 34.8130444444444],
		[89, 91, "경북", 128.602766666666, 35.8896055555555],
		[91, 77, "경남", 128.694166666666, 35.2347361111111],
		[52, 38, "제주", 126.500333333333, 33.4856944444444],
		[73, 134, "강원", 127.731975, 37.8826916666666],
	];
	const weatherLocation = location.map(([x, y, city, lon, lat]) => ({
		x,
		y,
		city,
		lon,
		lat,
	})); // location을 객체 형식으로 변환

	for (let i = 0; i < weatherLocation.length; i++) {
		let nx = weatherLocation[i].x;
		let ny = weatherLocation[i].y;

		const data = await fetch(
			`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=YyVdtivuQmwFOj1yZVtSmLQmIbuLGIBYB3xuDJajCAFnz%2F%2BdBdgrPstXhVdn1HfaoA01mXG5kcKx%2BsTMGLii0Q%3D%3D&pageNo=1&numOfRows=1000&dataType=json&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`
		); // 각 도시의 날씨 정보를 불러옴(기상청에서 한 번에 전국 데이터를 가져올 수 없게 막아둠.)
		let weatherJson = await data.json();

		let weatherLat = weatherLocation[i].lat;
		let weatherLon = weatherLocation[i].lon;
		// let weatherState = weatherJson[i][0]; // 날씨
		// let weatherTemp = weatherJson[i]; // 기온
		// let weatherHumi = weatherJson[i][1]; // 습도
		// let weatherWind = weatherJson[i][6]; // 풍향
		// let weatherWindSp = weatherJson[i][7]; // 풍속

		console.log(weatherJson, weatherLat, weatherLon);
	}
};

weatherDataPush();
// ------------------------------------

// $.ajax({
// 	url: "/weather/weather", // JSON 데이터를 받아올 URL.
// 	type: "GET",
// 	success: function (data) {
// 		const weatherJson = data.map(function (weather) {
// 			return {
// 				addr: weather.addr,
// 				obs_nm: weather.obs_nm,
// 				latlng: new kakao.maps.LatLng(weather.lat, weather.lon),
// 			};
// 		});

// 		for (let i = 0; i < weatherJson.length; i++) {
// 			// 마커 이미지의 이미지 크기 입니다
// 			const imageSize = new kakao.maps.Size(24, 35);

// 			// 마커 이미지를 생성합니다
// 			const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

// 			// 마커를 생성합니다
// 			const marker = new kakao.maps.Marker({
// 				map: map, // 마커를 표시할 지도
// 				position: weatherJson[i].latlng, // 마커를 표시할 위치
// 				title: weatherJson[i].addr, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
// 				sub: weatherJson[i].obs_nm,
// 				image: markerImage, // 마커 이미지
// 			});

// 			marker.setSub = function (depth) {
// 				// 마커 객체에 depth를 설정하는 함수를 추가합니다.
// 				this.obs_nm = depth;
// 			};

// 			marker.getSub = function () {
// 				// 마커 객체에서 depth를 가져오는 함수를 추가합니다.
// 				return this.obs_nm;
// 			};

// 			marker.setSub(weatherJson[i].obs_nm); // depth를 설정합니다.

// 			addMarkerClickListener(marker);
// 		}

// 		function addMarkerClickListener(marker) {
// 			kakao.maps.event.addListener(marker, "click", function () {
// 				console.log("marker.sub:", marker.sub);
// 				document.getElementById("markerTitle").innerText = marker.getTitle();
// 				document.getElementById("markerSub").innerText = marker.getSub();
// 				modal.style.display = "inline-block";
// 			});
// 		}
// 	},
// });
