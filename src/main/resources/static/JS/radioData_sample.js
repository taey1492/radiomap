// 마커 이미지 변수
let marker_radio = "";

// 생성된 마커 저장하는 배열
const radioMarkerArray = [];
// api 마커 배열
const radioMarkers = [];

// 방사능 마커 정보 불러오기
const radioDataPush = async () => {
	//input data검색을 추가할 예정
	//const year = document.querySelector("#yearinput").value;
	//const month = document.querySelector("#monthinput").value;
	const year = "2023"; //인풋검색 year month추가해야
	const month = "";
	const data = await fetch(`/map/radiosearch2?year=${year}`, {}); //&month=${month} method: "POST",
	const res = await data.text();
	const radioJson = JSON.parse(res); //json형식으로 읽기

	// i 번째 json 형태에서 필요한 데이터 가져오기
	for (let i = 0; i < radioJson.length; i++) {
		// radio.map에서 가져오는 데이터
		let radioLat = radioJson[i].r_lat;
		let radioLon = radioJson[i].r_lon;
		let radioRm = radioJson[i].r_rm; // 측정 주소
		// radio.data에서 가져오는 데이터
		let radioDate = radioJson[i].r_coldate; // 측정 날짜
		let radioDepth = radioJson[i].r_depth; // 측정 깊이(표층, 지층 등)
		let radioCS134 = radioJson[i].r_134cs; // 세슘 134
		let radioCS137 = radioJson[i].r_137cs; // 세슘 137
		let radioH3 = radioJson[i].r_3h; // 삼중수소

		// 날짜 연/월/일로 쪼개기
		let radioYear = radioDate.substring(0, 4); // 2023
		let radioMonth = radioDate.substring(5, 7); // 00(월)
		if (radioMonth.substr(0, 1) == "0") {
			// 01 -> 1(월)로 앞 '0' 삭제
			radioMonth = radioMonth.substr(1, 1);
		}
		let radioDay = radioDate.substring(8, 10); // 00(일)

		let radioCS = Math.round((radioCS134 + radioCS137) * 100) / 100; // 세슘 검출 기준: 세슘 134 + 세슘 137 -> 소숫점 두 자리까지 반올림

		for (let i = 0; i < radioJson.length; i++) {
			// 방사능 마커 이미지(진도에 따라 마커 이미지 변경)
			if (radioCS > 10000) {
				marker_radio = "../img/marker_radioactivity_red.png"; // 위험: 세슘 10,000 초과
			} else if (radioCS > 100) {
				marker_radio = "../img/marker_radioactivity_yellow.png"; // 관심: 세슘 100 초과 10,000 이하
			} else {
				marker_radio = "../img/marker_radioactivity_normal.png"; // 안전: 세슘 100 이하
			}
		}

		// null 값이 있는 경우 에러 방지
		if (radioLat !== null && radioLon !== null) {
			// weatherMarkerArray에 저장할 객체
			const radioData = {
				radioLat,
				radioLon,
				radioRm,
				radioYear,
				radioMonth,
				radioDay,
				radioDepth,
				radioCS,
				radioH3,
				marker_radio,
			};
			// 마커 데이터 배열로 저장
			radioMarkerArray.push(radioData);
		}
	}
	console.log("Pushed Radio DATA");
};

radioDataPush();

// 저장한 방사능 마커 지도에 표시하기
const radioAction = () => {
	for (let i = 0; i < radioMarkerArray.length; i++) {
		// 마커 이미지의 이미지 크기
		const imageSize = new kakao.maps.Size(18, 18);
		// 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
		const imageOption = { offset: new kakao.maps.Point(10, 35) };
		let markerImage = new kakao.maps.MarkerImage(
			radioMarkerArray[i].marker_radio,
			imageSize,
			imageOption
		);

		// 마커를 생성
		// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
		let markerPosition = new kakao.maps.LatLng(
			radioMarkerArray[i].radioLat,
			radioMarkerArray[i].radioLon
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
			`							<span class="eqDetail">측정일: </span>${radioMarkerArray[i].radioYear}년 ${radioMarkerArray[i].radioMonth}월 ${radioMarkerArray[i].radioDay}일` +
			`						</div>` +
			`		           <div class="ellipsis">` +
			`							<span class="eqDetail">위도: </span>${radioMarkerArray[i].radioLat} | <span class="eqDetail">경도: </span>${radioMarkerArray[i].radioLon}` +
			`						</div>` +
			`                <div class="ellipsis">` +
			`							<span class="eqDetail">측정 위치: </span>${radioMarkerArray[i].radioRm}, ${radioMarkerArray[i].radioDepth}` +
			`						</div>` +
			`                <div class="ellipsis">` +
			`							<span class="eqDetail">세슘: </span>${radioMarkerArray[i].radioCS}mBq/kg, <span class="eqDetail">삼중수소:</span> ${radioMarkerArray[i].radioH3}mBq/L` +
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
		marker.setMap(map);
		overlay.setMap(null);
		radioMarkers.push(marker);
	}
	console.log("action radio DATA");
};

const radioClose = (map) => {
	for (let i = 0; i < radioMarkers.length; i++) {
		radioMarkers[i].setMap(null);
	}
	console.log("closed radio Marker");
};
