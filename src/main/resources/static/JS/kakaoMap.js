// 지도 초기 화면 설정
const container = document.getElementById("map");
// level이 높을수록 지도를 축소함.
const options = {
	center: new kakao.maps.LatLng(33.7, 127.5),
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
