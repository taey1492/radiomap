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

new kakao.maps.MarkerClusterer(clustererOptions).addMarkers(
	positions.map(function (position) {
		return new kakao.maps.Marker({ position: position.latlng });
	}),
	map
);

// 지도 마커 생성
const kakaoMap = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커 위치
const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

// 마커를 생성
const marker = new kakao.maps.Marker({
	position: markerPosition,
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(kakaoMap);

// 지도 위의 마커 제거
// marker.setMap(null);

// 지도 컨트롤러 생성

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
const mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
