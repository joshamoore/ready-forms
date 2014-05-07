var textValues = document.getElementsByClassName('ready-forms-text-required');
var emailValues = document.getElementsByClassName('ready-forms-email-required');

var valid = false;

var borderStyle = "1px solid red";
var fontColor = "red";
var bgColor = "#FFBABA";
var errorValue = "This field is required!";

//Error message dialogue box
//Create styling
//Add div at the right side of the invalid input

function validate() {
	checkForm();
	if (valid) { return true; }
}

function checkForm() {
	checkText();
	checkEmail();
}

function checkText() {
	for (var i=0; i < textValues.length; i++) {
		if (textValues[i].value==null || textValues[i].value=="") {
			textValues[i].value = errorValue;
			textValues[i].style.background = bgColor;
			textValues[i].style.border=borderStyle;
			textValues[i].style.color=fontColor;
		}
		else {
			textValues[i].style.background = "#FFFFFF";
			textValues[i].style.border="1px solid #ccc";
			textValues[i].style.color="#2D2D2D";
		}
	}
}

function checkEmail() {
	for (var i=0; i < emailValues.length; i++) {
		if (emailValues[i].value==null || emailValues[i].value=="" || !validEmail(emailValues[i].value)) {
			emailValues[i].value = errorValue;
			emailValues[i].style.background = bgColor;
			emailValues[i].style.border=borderStyle;
			emailValues[i].style.color=fontColor;
		}
		else {
			emailValues[i].style.background = "#FFFFFF";
			emailValues[i].style.border="1px solid #ccc";
			emailValues[i].style.color="#2D2D2D";
		}
	}
}

function validEmail(email) {
	var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (pattern.test(email)==true) { 
		return true; 
	}
	else { 
		return false; 
	}

}