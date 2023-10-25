// 마커 이미지 선언
const marker_radio = "";

// 생성된 마커 저장하는 배열
const markerArray = [];

// 방사능 마커 정보 불러오기
$.ajax({
	url: "/map/testy", // JSON 데이터를 받아올 URL.
	type: "GET",
	success: function (data) {
		const positions = data.map(function (radioMap) {
			return {
				title: radioMap.address,
				latlng: new kakao.maps.LatLng(radioMap.lat, radioMap.lon),
			};
		});

		for (var i = 0; i < positions.length; i++) {
			// 마커 이미지의 이미지 크기 입니다
			var imageSize = new kakao.maps.Size(24, 35);

			// 마커 이미지를 생성합니다
			var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

			// 마커를 생성합니다
			var marker = new kakao.maps.Marker({
				map: map, // 마커를 표시할 지도
				position: positions[i].latlng, // 마커를 표시할 위치
				title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
				image: markerImage, // 마커 이미지
				clickable: true,
			});
			addMarkerClickListener(marker);
		}
		function addMarkerClickListener(marker) {
			kakao.maps.event.addListener(marker, "click", function () {
				document.getElementById("markerTitle").innerText = marker.getTitle();
				modal.style.display = "inline-block";
			});
		}
	},
});
const radioDataPush = async () => {
	console.log("pushed radio DATA");
};

radioDataPush();

const radioAction = () => {
	console.log("action radio DATA");
};
