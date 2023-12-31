// 메뉴 바 & 버튼 관련 코드

// 자동완성 편의성을 위한 string을 변수로 변환.
const MENUBARBTN = "menuBarBtn";
const SELECTEDBTN = "selectedBtn";

const RADIOMARKERINFOAREA = "radioMarkerInfoArea";
const EQMARKERINFOAREA = "eqMarkerInfoArea";

const menuBarArea = document.querySelector("#menuBarArea");
const visitCountArea = document.querySelector("#visitCountArea");
const eqYearArea = document.querySelector("#eqYearArea");

const weather = document.querySelector("#weatherBtn");
const radio = document.querySelector("#radioBtn");
const eq = document.querySelector("#eqBtn");
// const eqGra = document.querySelector("#eqGraBtn");

const radioMarker = document.querySelector("#radioMarkerInfo");
const eqMarker = document.querySelector("#eqMarkerInfo");
const expand = document.querySelector("#iconExpandArea");

// ----------------------------------------------------------------

let boolWeatherBtn = true;
let boolRadioBtn = false;
let boolEQBtn = false;
let boolEQGraBtn = false;

// 선택된 메뉴 CSS 변경
const selectWeatherBtn = (event) => {
	if (!boolWeatherBtn) {
		weather.classList.replace(MENUBARBTN, SELECTEDBTN);
		radioMarker.classList.replace(RADIOMARKERINFOAREA, "hidden");
		eqMarker.classList.replace(EQMARKERINFOAREA, "hidden");
		radio.className = MENUBARBTN;
		eq.classList = MENUBARBTN;
		// eqGra.classList = MENUBARBTN;
		boolWeatherBtn = true;
		boolRadioBtn = false;
		boolEQBtn = false;
		boolEQGraBtn = false;
	}
};
const selectRadioBtn = (event) => {
	if (!boolRadioBtn) {
		radio.classList.replace(MENUBARBTN, SELECTEDBTN);
		radioMarker.classList.replace("hidden", RADIOMARKERINFOAREA);
		eqMarker.classList.replace(EQMARKERINFOAREA, "hidden");
		weather.classList = MENUBARBTN;
		eq.classList = MENUBARBTN;
		// eqGra.classList = MENUBARBTN;
		boolWeatherBtn = false;
		boolRadioBtn = true;
		boolEQBtn = false;
		boolEQGraBtn = false;
	}
};
const selectEQBtn = (event) => {
	if (!boolEQBtn) {
		eq.classList.replace(MENUBARBTN, SELECTEDBTN);
		eqMarker.classList.replace("hidden", EQMARKERINFOAREA);
		radioMarker.classList.replace(RADIOMARKERINFOAREA, "hidden");
		weather.classList = MENUBARBTN;
		radio.classList = MENUBARBTN;
		// eqGra.classList = MENUBARBTN;
		boolWeatherBtn = false;
		boolRadioBtn = false;
		boolEQBtn = true;
		boolEQGraBtn = false;
	}
};

// const selectEQGraBtn = (event) => {
// 	if (!boolEQGraBtn) {
// 		eqGra.classList.replace(MENUBARBTN, SELECTEDBTN);
// 		eqMarker.classList.replace(EQMARKERINFOAREA, "hidden");
// 		radioMarker.classList.replace(RADIOMARKERINFOAREA, "hidden");
// 		weather.classList = MENUBARBTN;
// 		radio.classList = MENUBARBTN;
// 		eq.classList = MENUBARBTN;
// 		boolWeatherBtn = false;
// 		boolRadioBtn = false;
// 		boolEQBtn = false;
// 		boolEQGraBtn = true;
// 	}
// };

// 메뉴 버튼 hover 시 메뉴 바 커짐/작아짐
const mouseoverMenuBar = (event) => {
	expand.classList.replace("iconExpandArea", "hidden");
	menuBarArea.style.height = "88%";
};
const mouseoutMenuBar = (event) => {
	expand.classList.replace("hidden", "iconExpandArea");
	menuBarArea.style.height = "82px";
};

// 메뉴 버튼 hover 시 선택되지 않은 메뉴 보이기
const showMenuBar = () => {
	if (weather.className == SELECTEDBTN) {
		radio.classList.replace("hiddenAni", MENUBARBTN);
		eq.classList.replace("hiddenAni", MENUBARBTN);
		// eqGra.classList.replace("hiddenAni", MENUBARBTN);
	} else if (radio.className == SELECTEDBTN) {
		weather.classList.replace("hiddenAni", MENUBARBTN);
		eq.classList.replace("hiddenAni", MENUBARBTN);
		// eqGra.classList.replace("hiddenAni", MENUBARBTN);
	} else if (eq.className == SELECTEDBTN) {
		weather.classList.replace("hiddenAni", MENUBARBTN);
		radio.classList.replace("hiddenAni", MENUBARBTN);
		// eqGra.classList.replace("hiddenAni", MENUBARBTN);
	}
	// else if (eqGra.className == SELECTEDBTN) {
	// 	weather.classList.replace("hiddenAni", MENUBARBTN);
	// 	radio.classList.replace("hiddenAni", MENUBARBTN);
	// 	eq.classList.replace("hiddenAni", MENUBARBTN);
	// }
};

// 메뉴 버튼 hover 시 선택되지 않은 메뉴 숨기기
const hideMenuBar = () => {
	if (weather.className == SELECTEDBTN) {
		radio.classList.replace(MENUBARBTN, "hiddenAni");
		eq.classList.replace(MENUBARBTN, "hiddenAni");
		// eqGra.classList.replace(MENUBARBTN, "hiddenAni");
	} else if (radio.className == SELECTEDBTN) {
		weather.classList.replace(MENUBARBTN, "hiddenAni");
		eq.classList.replace(MENUBARBTN, "hiddenAni");
		// eqGra.classList.replace(MENUBARBTN, "hiddenAni");
	} else if (eq.className == SELECTEDBTN) {
		weather.classList.replace(MENUBARBTN, "hiddenAni");
		radio.classList.replace(MENUBARBTN, "hiddenAni");
		// eqGra.classList.replace(MENUBARBTN, "hiddenAni");
	}
	// else if (eqGra.className == SELECTEDBTN) {
	// 	weather.classList.replace(MENUBARBTN, "hiddenAni");
	// 	radio.classList.replace(MENUBARBTN, "hiddenAni");
	// 	eq.classList.replace(MENUBARBTN, "hiddenAni");
	// }
};

// 메뉴 hover 시 방문자 보여줌
const showVisitor = () => {
	if (menuBarArea.style.height == "88%") {
		visitCountArea.classList.replace("hidden", "visitCountArea");
	} else {
		visitCountArea.classList.replace("visitCountArea", "hidden");
	}
};
