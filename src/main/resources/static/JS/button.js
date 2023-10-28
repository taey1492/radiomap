// 자동완성 편의성을 위한 string을 변수로 변환.
const MENUBARBTN = "menuBarBtn";
const SELECTEDBTN = "selectedBtn";

const RADIOMARKERINFOAREA = "radioMarkerInfoArea";
const EQMARKERINFOAREA = "eqMarkerInfoArea";

const menuBarArea = document.querySelector("#menuBarArea");

const weather = document.querySelector("#weatherBtn");
const radio = document.querySelector("#radioBtn");
const eq = document.querySelector("#eqBtn");

const radioMarker = document.querySelector("#radioMarkerInfo");
const eqMarker = document.querySelector("#eqMarkerInfo");
const expand = document.querySelector("#iconExpandArea");

// ----------------------------------------------------------------

let boolWeatherBtn = true;
let boolRadioBtn = false;
let boolEQBtn = false;

// 선택된 메뉴 CSS 변경
const selectWeatherBtn = (event) => {
	if (!boolWeatherBtn) {
		weather.classList.replace(MENUBARBTN, SELECTEDBTN);
		radioMarker.classList.replace(RADIOMARKERINFOAREA, "hidden");
		eqMarker.classList.replace(EQMARKERINFOAREA, "hidden");
		radio.className = MENUBARBTN;
		eq.classList = MENUBARBTN;
		boolWeatherBtn = true;
		boolRadioBtn = false;
		boolEQBtn = false;
	}
};
const selectRadioBtn = (event) => {
	if (!boolRadioBtn) {
		radio.classList.replace(MENUBARBTN, SELECTEDBTN);
		radioMarker.classList.replace("hidden", RADIOMARKERINFOAREA);
		eqMarker.classList.replace(EQMARKERINFOAREA, "hidden");
		weather.classList = MENUBARBTN;
		eq.classList = MENUBARBTN;
		boolWeatherBtn = false;
		boolRadioBtn = true;
		boolEQBtn = false;
	}
};
const selectEQBtn = (event) => {
	if (!boolEQBtn) {
		eq.classList.replace(MENUBARBTN, SELECTEDBTN);
		eqMarker.classList.replace("hidden", EQMARKERINFOAREA);
		radioMarker.classList.replace(RADIOMARKERINFOAREA, "hidden");
		weather.classList = MENUBARBTN;
		radio.classList = MENUBARBTN;
		boolWeatherBtn = false;
		boolRadioBtn = false;
		boolEQBtn = true;
	}
};

// 메뉴 버튼 hover 시 메뉴 바 커짐/작아짐
const mouseoverMenuBar = (event) => {
	expand.classList.replace("iconExpandArea", "hidden");
	menuBarArea.style.height = "88%";
};
const mouseoutMenuBar = (event) => {
	expand.classList.replace("hidden", "iconExpandArea");
	menuBarArea.style.height = "8.5%";
};

// 메뉴 버튼 hover 시 선택되지 않은 메뉴 보이기
const showMenuBar = () => {
	if (weather.className == SELECTEDBTN) {
		radio.classList.replace("hidden", MENUBARBTN);
		eq.classList.replace("hidden", MENUBARBTN);
	} else if (radio.className == SELECTEDBTN) {
		weather.classList.replace("hidden", MENUBARBTN);
		eq.classList.replace("hidden", MENUBARBTN);
	} else {
		weather.classList.replace("hidden", MENUBARBTN);
		radio.classList.replace("hidden", MENUBARBTN);
	}
};

// 메뉴 버튼 hover 시 선택되지 않은 메뉴 숨기기
const hideMenuBar = () => {
	if (weather.className == SELECTEDBTN) {
		radio.classList.replace(MENUBARBTN, "hidden");
		eq.classList.replace(MENUBARBTN, "hidden");
	} else if (radio.className == SELECTEDBTN) {
		weather.classList.replace(MENUBARBTN, "hidden");
		eq.classList.replace(MENUBARBTN, "hidden");
	} else {
		weather.classList.replace(MENUBARBTN, "hidden");
		radio.classList.replace(MENUBARBTN, "hidden");
	}
};
