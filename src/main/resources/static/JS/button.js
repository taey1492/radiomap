const MENUBARBTN = "menuBarBtn";
const SELECTEDBTN = "selectedBtn";

let boolRadioBtn = true;
let boolEQBtn = false;

const radio = document.querySelector("#radioBtn");
const eq = document.querySelector("#eqBtn");

const selectRadioBtn = (event) => {
	if (!boolRadioBtn) {
		radio.classList.replace(MENUBARBTN, SELECTEDBTN);
		eq.classList = MENUBARBTN;
		boolRadioBtn = true;
		boolEQBtn = false;
	}
	console.log("RadioBtn Clicked");
};
const selectEQBtn = (event) => {
	if (!boolEQBtn) {
		eq.classList.replace(MENUBARBTN, SELECTEDBTN);
		radio.classList = MENUBARBTN;
		boolRadioBtn = false;
		boolEQBtn = true;
	}
	console.log("EQBtn Clicked");
};
