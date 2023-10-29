// 마커 이미지 변수
const marker_weather = "";

// 생성된 마커 저장하는 배열
const weatherMarkers = [];

$.ajax({
	url: "/weather/weather", // JSON 데이터를 받아올 URL.
	type: "GET",
	success: function (data) {
		const weatherJson = data.map(function (weahter) {
			return {
				addr: weahter.addr,
				obs_nm: weahter.obs_nm,
				latlng: new kakao.maps.LatLng(weahter.lat, weahter.lon),
			};
		});

		for (let i = 0; i < weatherJson.length; i++) {
			// 마커 이미지의 이미지 크기 입니다
			const imageSize = new kakao.maps.Size(24, 35);

			// 마커 이미지를 생성합니다
			const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

			// 마커를 생성합니다
			const marker = new kakao.maps.Marker({
				map: map, // 마커를 표시할 지도
				position: weatherJson[i].latlng, // 마커를 표시할 위치
				title: weatherJson[i].addr, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
				sub: weatherJson[i].obs_nm,
				image: markerImage, // 마커 이미지
			});

			marker.setSub = function (depth) {
				// 마커 객체에 depth를 설정하는 함수를 추가합니다.
				this.obs_nm = depth;
			};

			marker.getSub = function () {
				// 마커 객체에서 depth를 가져오는 함수를 추가합니다.
				return this.obs_nm;
			};

			marker.setSub(weatherJson[i].obs_nm); // depth를 설정합니다.

			addMarkerClickListener(marker);
		}

		function addMarkerClickListener(marker) {
			kakao.maps.event.addListener(marker, "click", function () {
				console.log("marker.sub:", marker.sub);
				document.getElementById("markerTitle").innerText = marker.getTitle();
				document.getElementById("markerSub").innerText = marker.getSub();
				modal.style.display = "inline-block";
			});
		}
	},
});
