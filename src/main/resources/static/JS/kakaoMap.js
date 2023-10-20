const container = document.getElementById("map");
const options = {
	center: new kakao.maps.LatLng(34.7884269497, 127.9254114941),
	level: 3,
};
const map = new kakao.maps.Map(container, options);
const positions = [
	{ latlng: new kakao.maps.LatLng(34.7884269497, 127.9254114941) },
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
