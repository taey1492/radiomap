const MENUBARBTN = "menuBarBtn";
const SELECTEDBTN = "selectedBtn";

const RADIOMARKERINFOAREA = "radioMarkerInfoArea";
const EQMARKERINFOAREA = "eqMarkerInfoArea";

const menuBarArea = document.querySelector("#menuBarArea");

const radio = document.querySelector("#radioBtn");
const eq = document.querySelector("#eqBtn");
const radioMarker = document.querySelector("#radioMarkerInfo");
const eqMarker = document.querySelector("#eqMarkerInfo");

let boolRadioBtn = true;
let boolEQBtn = false;

const selectRadioBtn = (event) => {
	if (!boolRadioBtn) {
		radio.classList.replace(MENUBARBTN, SELECTEDBTN);
		radioMarker.classList.replace("hidden", RADIOMARKERINFOAREA);
		eqMarker.classList.replace(EQMARKERINFOAREA, "hidden");
		eq.classList = MENUBARBTN;
		boolRadioBtn = true;
		boolEQBtn = false;
	}
};
const selectEQBtn = (event) => {
	if (!boolEQBtn) {
		eq.classList.replace(MENUBARBTN, SELECTEDBTN);
		eqMarker.classList.replace("hidden", EQMARKERINFOAREA);
		radioMarker.classList.replace(RADIOMARKERINFOAREA, "hidden");
		radio.classList = MENUBARBTN;
		boolRadioBtn = false;
		boolEQBtn = true;
	}
};

// 메뉴 버튼 hover 시 매뉴 바 색상 on/off
const mouseoverMenuBar = (event) => {
	menuBarArea.style.backgroundColor = "#5ea8c8e1";
	menuBarArea.style.height = "88%";
};
let hoverCnt = 0;
const mouseoutMenuBar = (event) => {
	menuBarArea.style.backgroundColor = "";
	menuBarArea.style.height = "13%";
};
