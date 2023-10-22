const container = document.getElementById("kakaoMap");
// level이 높을수록 지도를 축소함.
const options = {
	center: new kakao.maps.LatLng(32.7884269497, 127.9254114941),
	level: 13,
};
const map = new kakao.maps.Map(container, options);
const positions = [
	{ latlng: new kakao.maps.LatLng(32.7884269497, 127.9254114941) },
];
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
