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

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성
const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 마커 표시하기

// 마커를 표시할 위치와 title
const radioNormalPoint = [
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

const radioYellowPoint = [
    {
        title: "카카오",
        latlng: new kakao.maps.LatLng(36.450705, 126.570677),
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

const radioRedPoint = [
    {
        title: "카카오",
        latlng: new kakao.maps.LatLng(36.450705, 126.870677),
    },
    {
        title: "텃밭",
        latlng: new kakao.maps.LatLng(34.480879, 126.86994),
    },
    {
        title: "근린공원",
        latlng: new kakao.maps.LatLng(35.481393, 126.870738),
    },
];

// 마커 이미지의 이미지 주소입니다
const iconRadioNormal = "../img/icon_radioactivity_mono.png";
const iconRadioYellow = "../img/icon_radioactivity_red.png";
const iconRadioRed = "../img/icon_radioactivity_yellow.png";

// 방사능 - 정상

for (let i = 0; i < radioNormalPoint.length; i++) {
    // 마커 이미지의 이미지 크기 입니다
    const imageSize = new kakao.maps.Size(30, 30);

    // 마커 이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(iconRadioNormal, imageSize);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        title: radioNormalPoint[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        position: radioNormalPoint[i].latlng, // 마커를 표시할 위치
        image: markerImage, // 마커 이미지
        clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    });
    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    const iwContent = '<div style="padding:10px;">정상입니다.</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = true; // removeable 속성을 true 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
    });

    // 마커에 마우스오버 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "mouseover", function () {
        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        infowindow.open(map, marker);
    });

    // 마커에 마우스아웃 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "mouseout", function () {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        infowindow.close();
    });
}

// 방사능 - 경고

for (let i = 0; i < radioYellowPoint.length; i++) {
    // 마커 이미지의 이미지 크기 입니다
    const imageSize = new kakao.maps.Size(30, 30);

    // 마커 이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(iconRadioYellow, imageSize);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        title: radioYellowPoint[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        position: radioYellowPoint[i].latlng, // 마커를 표시할 위치
        image: markerImage, // 마커 이미지
        clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    });
    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    const iwContent = '<div style="padding:10px;">위험합니다.</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = true; // removeable 속성을 true 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
    });

    // 마커에 마우스오버 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "mouseover", function () {
        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        infowindow.open(map, marker);
    });

    // 마커에 마우스아웃 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "mouseout", function () {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        infowindow.close();
    });
}

// 방사능 - 위험

for (let i = 0; i < radioRedPoint.length; i++) {
    // 마커 이미지의 이미지 크기 입니다
    const imageSize = new kakao.maps.Size(30, 30);

    // 마커 이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(iconRadioRed, imageSize);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        title: radioRedPoint[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        position: radioRedPoint[i].latlng, // 마커를 표시할 위치
        image: markerImage, // 마커 이미지
        clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    });
    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    const iwContent = '<div style="padding: 10px;">경고합니다.</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = true; // removeable 속성을 true 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
    });

    // 마커에 마우스오버 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "mouseover", function () {
        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        infowindow.open(map, marker);
    });

    // 마커에 마우스아웃 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "mouseout", function () {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        infowindow.close();
    });
}

//year로 검색하는 영역입니다.
const eqyearpush = async () => {
    const year = document.querySelector("#yeartest").value;
    const data = await fetch(`/yeartest?year=${year}`);
    const res = await data.text();
    const json = JSON.parse(res); //json형식으로 읽기
    document.querySelector("#textarea").innerText = json; //textarea영역에 출력(지도에 찍히는것과는 상관없습니다.)

    for (let i = 0; i < json.length; i++) {
        // i 번째 json 형태에서 필요한 데이터 가져오기
        let jlat = json[i].lat;
        let jlon = json[i].lon;

        // 마커를 생성합니다(카카오)
        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var markerPosition = new kakao.maps.LatLng(jlat, jlon);

        var marker = new kakao.maps.Marker({
            position: markerPosition,
        });
        //마커를 지도에 세팅
        marker.setMap(map);
    }
};
