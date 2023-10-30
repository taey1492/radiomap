// 마커 이미지 변수
let marker_weather = "";

// 생성된 마커 저장하는 배열
const weatherMarkers = [];

// 날씨 api json으로 불러오기
const weatherDataPush = async () => {
	// 브라우저의 현재 시간 가져오기
	let now = new Date();
	let year = now.getFullYear();
	let month = now.getMonth() + 1;
	let date = now.getDate();
	let hours = now.getHours() - 1;
	// 0시, 1시 앞에 0 붙이기
	hours = String(hours).padStart(2, "0");
	let min = now.getMinutes();
	if (min >= 55) min = "30";
	else if (min >= 25) min = "00";
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
		[68, 100, "충남", 127.422955555555, 36.1238722222222],
		[63, 89, "전북", 127.111052777777, 35.817275],
		[51, 67, "전남", 126.465, 34.8130444444444],
		[89, 91, "경북", 128.602766666666, 36.2000055555555],
		[91, 77, "경남", 128.694166666666, 35.5347361111111],
		[52, 38, "제주", 126.500333333333, 33.4856944444444],
		[73, 134, "강원", 128.731975, 37.4826916666666],
	];
	// location을 객체 형식으로 변환
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
		let weatherState = weatherJson.response.body.items.item[0].obsrValue; // 날씨
		let weatherTemp = weatherJson.response.body.items.item[3].obsrValue; // 기온
		let weatherHumi = weatherJson.response.body.items.item[1].obsrValue; // 습도
		let weatherWind = weatherJson.response.body.items.item[5].obsrValue; // 풍향
		let weatherWindSp = weatherJson.response.body.items.item[7].obsrValue; // 풍속
		let weatherCity = weatherLocation[i].city; // 지역

		// 지역에 따른 마커 배정
		if (weatherCity == "서울")
			marker_weather = "../img/marker_weather_서울.png";
		else if (weatherCity == "경기")
			marker_weather = "../img/marker_weather_경기.png";
		else if (weatherCity == "부산")
			marker_weather = "../img/marker_weather_부산.png";
		else if (weatherCity == "대구")
			marker_weather = "../img/marker_weather_대구.png";
		else if (weatherCity == "인천")
			marker_weather = "../img/marker_weather_인천.png";
		else if (weatherCity == "광주")
			marker_weather = "../img/marker_weather_광주.png";
		else if (weatherCity == "대전")
			marker_weather = "../img/marker_weather_대전.png";
		else if (weatherCity == "울산")
			marker_weather = "../img/marker_weather_울산.png";
		else if (weatherCity == "제주")
			marker_weather = "../img/marker_weather_제주.png";
		else if (weatherCity == "충북")
			marker_weather = "../img/marker_weather_충북.png";
		else if (weatherCity == "충남")
			marker_weather = "../img/marker_weather_충남.png";
		else if (weatherCity == "전북")
			marker_weather = "../img/marker_weather_전북.png";
		else if (weatherCity == "전남")
			marker_weather = "../img/marker_weather_전남.png";
		else if (weatherCity == "경북")
			marker_weather = "../img/marker_weather_경북.png";
		else if (weatherCity == "경남")
			marker_weather = "../img/marker_weather_경남.png";
		else if (weatherCity == "강원")
			marker_weather = "../img/marker_weather_강원.png";

		// 풍향 각도에 따라 분류
		if (weatherWind >= 315) weatherWind = "북서북";
		else if (weatherWind >= 270) weatherWind = "서북서";
		else if (weatherWind >= 225) weatherWind = "남서서";
		else if (weatherWind >= 180) weatherWind = "남남서";
		else if (weatherWind >= 135) weatherWind = "남동남";
		else if (weatherWind >= 90) weatherWind = "동남동";
		else if (weatherWind >= 45) weatherWind = "북동동";
		else weatherWind = "북북동";

		// 날씨 코드 0 ~ 7에 따른 날씨 텍스트 표현
		if (weatherState == 0) weatherState = "맑음";
		else if (weatherState == 1) weatherState = "비";
		else if (weatherState == 2) weatherState = "비/눈";
		else if (weatherState == 3) weatherState = "눈";
		else if (weatherState == 4) weatherState = "소나기";
		else if (weatherState == 5) weatherState = "빗방울";
		else if (weatherState == 6) weatherState = "빗방울/눈날림";
		else weatherState = "눈날림";

		const imageSize = new kakao.maps.Size(80, 80);
		// 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
		const imageOption = { offset: new kakao.maps.Point(25, 35) };
		let markerImage = new kakao.maps.MarkerImage(
			marker_weather,
			imageSize,
			imageOption
		);

		// 마커를 생성
		// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
		let markerPosition = new kakao.maps.LatLng(weatherLat, weatherLon); // 마커를 찍을 위치(위도, 경도)
		let marker = new kakao.maps.Marker({
			image: markerImage, // 마커 이미지
			position: markerPosition,
		});

		// 마커 오버레이 내용
		let content =
			'<div class="wrap">' +
			'    <div class="info">' +
			'        <div class="body">' +
			'            <div class="desc">' +
			`                <div class="ellipsis">` +
			`							<span class="eqDetail">날씨: </span>${weatherState}` +
			`						</div>` +
			`		           <div class="ellipsis">` +
			`							<span class="eqDetail">기온: </span>${weatherTemp}도` +
			`						</div>` +
			`						<div>` +
			`							<span class="eqDetail">습도: </span>${weatherHumi}%` +
			`						</div>` +
			`                <div class="ellipsis">` +
			`							<span class="eqDetail">풍향: </span>${weatherWind}, ${weatherWindSp}m/s` +
			`						</div>` +
			"            </div>" +
			"        </div>" +
			"    </div>" +
			"</div>";

		// 마커 위에 커스텀 오버레이를 표시
		const overlay = new kakao.maps.CustomOverlay({
			content: content,
			map: map,
			position: marker.getPosition(),
		});

		// 마커를 마우스를 올렸을 때 커스텀 오버레이를 표시합니다.
		kakao.maps.event.addListener(marker, "mouseover", function (event) {
			overlay.setMap(map);
		});

		// 마우스가 마커 밖으로 나가면 오버레이를 끕니다.
		kakao.maps.event.addListener(marker, "mouseout", function (event) {
			overlay.setMap(null);
		});

		// 마커 데이터 배열로 저장
		weatherMarkers.push(marker);
		// 마커를 지도에 세팅
		marker.setMap(map);
		overlay.setMap(null);
	}
	console.log("Pushed Weather DATA");
};

weatherDataPush();

// 저장한 날씨 마커 지도에 표시하기
const weatherAction = () => {
	for (let i = 0; i < weatherMarkers.length; i++) {
		weatherMarkers[i].setMap(map);
	}
};
// 다른 메뉴 눌렀을 때 마커 지우기
const weatherClose = () => {
	for (let i = 0; i < weatherMarkers.length; i++) {
		weatherMarkers[i].setMap(null);
	}
};
