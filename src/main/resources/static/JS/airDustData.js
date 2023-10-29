// 1. 현재 비동기 시작 버튼이 없습니다.
// 	2. 	 날씨 api출력 부분입니다 현재 마커가 없습니다. 마커 대신에 서울, 부산, 대구, 인천, 광주, 대전, 울산, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주, 세종
// 선택해서 적당한 위치에 직접 연결하면 편할것같습니다.
// 3. 이름이 같은 지역은 측정소별로 다른거니 평균내서 값 넣으면 됩니다.
// (인접지역 합쳐서 평균내버려도 됩니다. 편할대로 )

const airDustPush = async () => {
	//const year = document.querySelector("#yeartest").value;//현재 미세정보 가져와서 필요 x
	const data = await fetch(
		`https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=YyVdtivuQmwFOj1yZVtSmLQmIbuLGIBYB3xuDJajCAFnz%2F%2BdBdgrPstXhVdn1HfaoA01mXG5kcKx%2BsTMGLii0Q%3D%3D&returnType=airJson&numOfRows=648&pageNo=1&sidoName=전국&ver=1.4`
	); //설정 옵션이 있으나 전부 가져오는 옵션으로 씀
	const res = await data.text();
	const airJson = JSON.parse(res); //airJson형식으로 읽기
	document.querySelector("#textarea").innerText = airJson; //textarea영역에 출력(지도에 찍히는것과는 상관없습니다.)

	for (let i = 0; i < airJson.response.body.items.length; i++) {
		// i 번째 airJson 형태에서 필요한 데이터 가져오기

		//전국, 서울, 부산, 대구, 인천, 광주, 대전, 울산, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주, 세종
		let cityName = airJson.response.body.items[i].sidoName; // 시도이름
		let stationName = airJson.response.body.items[i].stationName; // 장소이름
		console.log(stationName);
		let no2Grade = airJson.response.body.items[i].no2Grade; // 질소 등급
		let pm10Grade = airJson.response.body.items[i].pm10Grade; // pm10 등급
		let pm25Grade = airJson.response.body.items[i].pm25Grade; // pm25 등급
		let o3Grade = airJson.response.body.items[i].o3Grade; // 오존 등급
		console.log(i); // 647개 출력

		document.querySelector("#textarea").innerText = stationName;
	}
};
