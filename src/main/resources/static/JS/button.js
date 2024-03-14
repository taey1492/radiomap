// 메뉴 바 & 버튼 관련 코드

// 자동완성 편의성을 위한 string을 변수로 변환.
const MENUBARBTN = "menuBarBtn";
const SELECTEDBTN = "selectedBtn";
const FADE_IN = "menuBarBtn-fade_in";
const FADE_OUT = "menuBarBtn-fade_out";

const RADIOMARKERINFOAREA = "radioMarkerInfoArea";
const EQMARKERINFOAREA = "eqMarkerInfoArea";

const menuBarArea = document.querySelector("#menuBarArea");

const weather = document.querySelector("#weatherBtn");
const radio = document.querySelector("#radioBtn");
const eq = document.querySelector("#eqBtn");
const eqYear = document.querySelector("#eqYearArea");
// const eqGra = document.querySelector("#eqGraBtn");

const radioMarker = document.querySelector("#radioMarkerInfo");
const eqMarker = document.querySelector("#eqMarkerInfo");
const expand = document.querySelector("#iconExpandArea");

// ----------------------------------------------------------------

let boolWeatherBtn = true;
let boolRadioBtn = false;
let boolEQBtn = false;
let boolEQGraBtn = false;
let boolEQYearAreaBtn = false;

// 선택된 메뉴 CSS 변경
const selectWeatherBtn = () => {
	if (!boolWeatherBtn) {
		weather.classList.replace(MENUBARBTN, SELECTEDBTN);
		radioMarker.classList.replace(RADIOMARKERINFOAREA, "hidden");
		eqMarker.classList.replace(EQMARKERINFOAREA, "hidden");
		radio.className = MENUBARBTN;
		eq.classList = MENUBARBTN;
		boolWeatherBtn = true;
		boolRadioBtn = false;
		boolEQBtn = false;
		boolEQYearAreaBtn = false;
		boolEQGraBtn = false;
		// eqGra.classList = MENUBARBTN;
	}
};
const selectRadioBtn = () => {
	if (!boolRadioBtn) {
		radio.classList.replace(MENUBARBTN, SELECTEDBTN);
		radioMarker.classList.replace("hidden", RADIOMARKERINFOAREA);
		eqMarker.classList.replace(EQMARKERINFOAREA, "hidden");
		weather.classList = MENUBARBTN;
		eq.classList = MENUBARBTN;
		boolWeatherBtn = false;
		boolRadioBtn = true;
		boolEQBtn = false;
		boolEQYearAreaBtn = false;
		boolEQGraBtn = false;
		// eqGra.classList = MENUBARBTN;
	}
};
const selectEQBtn = () => {
	if (!boolEQBtn) {
		eq.classList.replace(MENUBARBTN, SELECTEDBTN);
		eqMarker.classList.replace("hidden", EQMARKERINFOAREA);
		radioMarker.classList.replace(RADIOMARKERINFOAREA, "hidden");
		weather.classList = MENUBARBTN;
		radio.classList = MENUBARBTN;
		boolWeatherBtn = false;
		boolRadioBtn = false;
		boolEQBtn = true;
		boolEQYearAreaBtn = true;
		boolEQGraBtn = false;
		// eqGra.classList = MENUBARBTN;
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
const mouseoverMenuBar = () => {
	expand.classList.replace("iconExpandArea", "hidden");
	menuBarArea.style.height = "88%";
};
const mouseoutMenuBar = () => {
	expand.classList.replace("hidden", "iconExpandArea");
	menuBarArea.style.height = "82px";
};

const showAction = (theme, fade, time) => {
	theme.classList.replace("hidden", fade);
	setTimeout(function () {
		theme.classList.replace(fade, MENUBARBTN);
	}, time);
};
const hiddenAction = (theme, fade, time) => {
	theme.clientLeft.replace(MENUBARBTN, fade);
	setTimeout(function () {
		theme.classList.replace(fade, "hidden");
	}, time);
};

// 메뉴 버튼 hover 시 선택되지 않은 메뉴 보이기
const showMenuBar = () => {
	if (weather.className === SELECTEDBTN) {
		radio.classList.replace("hidden", MENUBARBTN);
		eq.classList.replace("hidden", MENUBARBTN);
		eqYear.classList.replace("hidden", "eqYearArea");
		// showAction(radio, FADE_IN, 300);
		// showAction(eq, FADE_IN, 300);
		// eqGra.classList.replace("hidden", MENUBARBTN);
	} else if (radio.className === SELECTEDBTN) {
		weather.classList.replace("hidden", MENUBARBTN);
		eq.classList.replace("hidden", MENUBARBTN);
		eqYear.classList.replace("hidden", "eqYearArea");
		// showAction(weather, FADE_IN, 300);
		// showAction(eq, FADE_IN, 300);
		// eqGra.classList.replace("hidden", MENUBARBTN);
	} else if (eq.className === SELECTEDBTN) {
		weather.classList.replace("hidden", MENUBARBTN);
		radio.classList.replace("hidden", MENUBARBTN);
		eqYear.classList.replace("hidden", "eqYearArea");
		// showAction(weather, FADE_IN, 300);
		// showAction(radio, FADE_IN, 300);
		// eqGra.classList.replace("hidden", MENUBARBTN);
	}
	// else if (eqGra.className === SELECTEDBTN) {
	// 	weather.classList.replace("hidden", MENUBARBTN);
	// 	radio.classList.replace("hidden", MENUBARBTN);
	// 	eq.classList.replace("hidden", MENUBARBTN);
	// }
};

// 메뉴 버튼 mouseout 시 선택되지 않은 메뉴 숨기기
const hideMenuBar = () => {
	if (weather.className === SELECTEDBTN) {
		// hiddenAction(radio, FADE_OUT, 300);
		// hiddenAction(eq, FADE_OUT, 300);
		radio.classList.replace(MENUBARBTN, "hidden");
		eq.classList.replace(MENUBARBTN, "hidden");
		eqYear.classList.replace("eqYearArea", "hidden");
		// eqGra.classList.replace(MENUBARBTN, "hidden");
	} else if (radio.className === SELECTEDBTN) {
		// hiddenAction(weather, FADE_OUT, 300);
		// hiddenAction(eq, FADE_OUT, 300);
		weather.classList.replace(MENUBARBTN, "hidden");
		eq.classList.replace(MENUBARBTN, "hidden");
		eqYear.classList.replace("eqYearArea", "hidden");
		// eqGra.classList.replace(MENUBARBTN, "hidden");
	} else if (eq.className === SELECTEDBTN) {
		// hiddenAction(weather, FADE_OUT, 300);
		// hiddenAction(radio, FADE_OUT, 300);
		weather.classList.replace(MENUBARBTN, "hidden");
		radio.classList.replace(MENUBARBTN, "hidden");
		eqYear.classList.replace("eqYearArea", "hidden");
		// eqGra.classList.replace(MENUBARBTN, "hidden");
	}
	// else if (eqGra.className === SELECTEDBTN) {
	// 	weather.classList.replace(MENUBARBTN, "hidden");
	// 	radio.classList.replace(MENUBARBTN, "hidden");
	// 	eq.classList.replace(MENUBARBTN, "hidden");
	// }
};
