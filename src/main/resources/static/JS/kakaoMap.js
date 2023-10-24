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

// 지도에 컨트롤을 추가해야 지도위에 표시
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성
const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 마커 표시하기

// 마커를 표시할 위치와 title
const radioPoint = [
    {
        title: "카카오",
        latlng: new kakao.maps.LatLng(35.450705, 127.070677),
    },
    {
        title: "텃밭",
        latlng: new kakao.maps.LatLng(34.490879, 127.06994),
    },
    {
        title: "근린공원",
        latlng: new kakao.maps.LatLng(36.491393, 127.070738),
    },
];

// 마커 이미지의 이미지 주소입니다
const iconRadioNormal = "../img/icon_radioactivity_mono.png";
const iconRadioYellow = "../img/icon_radioactivity_yellow.png";
const iconRadioRed = "../img/icon_radioactivity_red.png";

// 방사능 - 정상

for (let i = 0; i < radioPoint.length; i++) {
    // 마커 이미지의 이미지 크기 입니다
    const imageSize = new kakao.maps.Size(30, 30);

    // 마커 이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(iconRadioNormal, imageSize);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        title: radioPoint[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        position: radioPoint[i].latlng, // 마커를 표시할 위치
        image: markerImage, // 마커 이미지
        clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    });

    // 커스텀 오버레이에 표시할 컨텐츠 입니다
    // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어 가능
    const content =
        '<div class="wrap">' +
        '    <div class="info">' +
        '        <div class="title">' +
        `            ${radioPoint[i].title}` +
        '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
        "        </div>" +
        '        <div class="body">' +
        '            <div class="desc">' +
        '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
        '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
        '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
        "            </div>" +
        "        </div>" +
        "    </div>" +
        "</div>";

    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    const overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition(),
    });

    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(marker, "click", function (event) {
        overlay.setMap(map);
    });

    // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
    function closeOverlay() {
        overlay.setMap(null);
    }
}

// year로 검색하는 영역입니다.
const eqYearPush = async () => {
    // year로 인식할 input 구현해야 합니다.
    // const year = document.querySelector("#yeartest").value;
    const year = "2023";
    const data = await fetch(`/yearsearch?year=${year}`);
    const res = await data.text();
    const json = JSON.parse(res); //json형식으로 읽기
    console.log(json[0]); //json데이터 확인

    // i 번째 json 형태에서 필요한 데이터 가져오기
    for (let i = 0; i < json.length; i++) {
        let eqLat = json[i].lat;
        let eqLon = json[i].lon;
        let eqScale = json[i].eqscale; // 규모
        let eqMagnitude = json[i].magnitude; // 진도
        let eqLocation = json[i].location;

        // 마커를 생성
        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var markerPosition = new kakao.maps.LatLng(jlat, jlon);
        var marker = new kakao.maps.Marker({
            map: map,
            scale: eqScale,
            magnitude: eqMagnitude,
            image: markerImage, // 마커 이미지
            position: markerPosition,
        });

        // 마커를 지도에 세팅
        marker.setMap(map);
    }
};
