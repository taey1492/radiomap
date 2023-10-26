// 마커 이미지 변수 선언
const marker_radio = "";

// 생성된 마커 저장하는 배열
const radioMarkerArray = [];

// 방사능 마커 정보 불러오기

// $.ajax({
// 	url: "/map/radio", // JSON 데이터를 받아올 URL.
// 	type: "POST",
// 	data: {
// 		year: year,
// 		month: month,
// 	},
// 	success: function (data) {
// 		const radioJson = data.map(function (radioMap) {
// 			return {
// 				radioLat: radioMap.radioData.lat, // 위도
// 				radioLon: radioMap.radioData.lon, // 경도
// 				radioDate: radioMap.radioData.coldate, // 측정일
// 				radioDepth: radioMap.radioData.depth, // 측정 깊이(표층, 지층 등)
// 				radioSeaName: radioMap.radioData.ecolname, // 측정 바다
// 				radioCS134: radioMap.radioData.r134cs, // 세숨 134
// 				radioCS137: radioMap.radioData.r137cs, // 세슘 137
// 				radioH3: radioMap.radioData.r3h, // 삼중수소
// 			};
// 		});
// 		let radioCS = radioCS134 + radioCS137; // 세슘 검출 기준: 세슘 134 + 세슘 137

// 		for (let i = 0; i < radioJson.length; i++) {
// 			// 방사능 마커 이미지(진도에 따라 마커 이미지 변경)
// 			if (radioCS >= 10000) {
// 				marker_radio = "../img/marker_radioactivity_red.png"; // 안전 세슘 100 이하
// 			} else if (eqScale >= 100) {
// 				marker_radio = "../img/marker_radioactivity_yellow.png"; // 관심 세슘 100 초과 10,000 이하
// 			} else {
// 				marker_radio = "../img/marker_radioactivity_red.png"; // 위험 세슘 10,000 초과
// 			}
// 		}

// 		// radioMarkerArray에 저장할 객체
// 		const radioData = {
// 			radioLat,
// 			radioLon,
// 			radioDate,
// 			radioDepth,
// 			radioSeaName,
// 			radioCS,
// 			radioH3,
// 			marker_radio,
// 		};
// 		// 마커 데이터 배열 radioData에 저장
// 		radioMarkerArray.push(radioData);
// 	},
// });
const radioDataPush = () => {};
radioDataPush();

const radioAction = () => {
	console.log("action radio DATA");
};
