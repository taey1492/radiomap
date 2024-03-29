// 마커 이미지 변수
let marker_earthquake = "";
// api 마커 배열
let eqMarkers = [];

// 지진 마커 정보 불러옴과 동시에 마커들을 eqMarkers에 저장.
const eqDataPush = async () => {
	let year = document.querySelector("#eqYearMenu").value;
	const data = await fetch(`/yearsearch?year=${year}`);
	const eqJson = await data.json();

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
		let markerPosition = new kakao.maps.LatLng(eqLat, eqLon); // 마커를 표시할 위치(위도, 경도)
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
			`							<span class="eqDetail">발생 일시: </span>${eqYear}년 ${eqMonth}월 ${eqDay}일, ${eqAntemeri} ${eqTime}` +
			`						</div>` +
			`		           <div class="ellipsis">` +
			`							<span class="eqDetail">위도: </span>${eqLat} | <span class="eqDetail">경도: </span>${eqLon}` +
			`						</div>` +
			`                <div class="ellipsis">` +
			`							<span class="eqDetail">발생지: </span>${eqLocation}` +
			`						</div>` +
			`                <div class="ellipsis">` +
			`							<span class="eqDetail">규모: </span>${eqScale}, <span class="eqDetail">진도:</span> ${eqMagnitude}, <span class="eqDetail">진앙 깊이:</span> ${eqDeep}km	` +
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
		kakao.maps.event.addListener(marker, "mouseover", function () {
			overlay.setMap(map);
		});

		// 마우스가 마커 밖으로 나가면 오버레이를 끕니다.
		kakao.maps.event.addListener(marker, "mouseout", function () {
			overlay.setMap(null);
		});

		// 마커를 저장
		eqMarkers.push(marker);
		// 마커를 지도에 표시할 준비
		marker.setMap(null);
		overlay.setMap(null);
	}
};

eqDataPush();

// 미리 저장한 마커 지도에 표시하기
const eqAction = () => {
	for (let i = 0; i < eqMarkers.length; i++) {
		eqMarkers[i].setMap(map);
	}
};

// 다른 메뉴를 눌렀을 때 지진 마커 지우기
const eqClose = () => {
	for (let i = 0; i < eqMarkers.length; i++) {
		eqMarkers[i].setMap(null);
	}
};

const changedYear = async () => {
	eqClose();
	eqMarkers = [];
	await eqDataPush();
	eqAction();
};
