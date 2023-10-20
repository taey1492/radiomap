const MENUBARBTN = "menuBarBtn";
const SELECTEDBTN = "selectedBtn";

const boolRadioBtn = true;
const boolEQBtn = false;

const radio = document.querySelector("#radioBtn");
const eq = document.querySelector("#eqBtn");

const selectRadioBtn = (event) => {
	if (radio.classList == MENUBARBTN) {
		radio.classList.replace(MENUBARBTN, SELECTEDBTN);
		eq.classList = MENUBARBTN;
		boolRadioBtn = true;
		boolEQBtn = false;
	}

	// console.log(boolRadioBtn, boolEQBtn);
};
const selectEQBtn = (event) => {
	if (eq.classList == MENUBARBTN) {
		eq.classList.replace(MENUBARBTN, SELECTEDBTN);
		radio.classList = MENUBARBTN;
		boolEQBtn = true;
		boolRadioBtn = false;
	}

	// console.log(boolRadioBtn, boolEQBtn);
};
