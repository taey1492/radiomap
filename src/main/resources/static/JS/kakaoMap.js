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

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 마커를 표시할 위치와 title 객체 배열입니다
const radioYellowPoint = [
	{
		title: "카카오",
		latlng: new kakao.maps.LatLng(36.450705, 126.570677),
	},
	{
		title: "생태연못",
		latlng: new kakao.maps.LatLng(33.450936, 126.569477),
	},
	{
		title: "텃밭",
		latlng: new kakao.maps.LatLng(34.450879, 126.56994),
	},
	{
		title: "근린공원",
		latlng: new kakao.maps.LatLng(35.451393, 126.570738),
	},
];

// 마커 이미지의 이미지 주소입니다
const iconRadioYellow = "../img/icon_radioactivity_red.png";
const iconRadioRed = "../img/icon_radioactivity_yellow.png";

for (const i = 0; i < radioYellowPoint.length; i++) {
	// 마커 이미지의 이미지 크기 입니다
	const imageSize = new kakao.maps.Size(30, 30);

	// 마커 이미지를 생성합니다
	const markerImage = new kakao.maps.MarkerImage(iconRadioYellow, imageSize);

	// 마커를 생성합니다
	const marker = new kakao.maps.Marker({
		map: map, // 마커를 표시할 지도
		position: radioYellowPoint[i].latlng, // 마커를 표시할 위치
		title: radioYellowPoint[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
		image: markerImage, // 마커 이미지
	});
}
