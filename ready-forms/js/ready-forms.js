var textValues = document.getElementsByClassName('ready-forms-text-required');
var emailValues = document.getElementsByClassName('ready-forms-email-required');

var valid = false;

function validate() {
	checkText();
	checkEmail();
	if (valid) return true;
}

function checkText() {
	for (var i=0; i < textValues.length; i++) {
		if (textValues[i].value==null || textValues[i].value=="") {
			textValues[i].value = "This field is required!";
			textValues[i].style.background = "#FFBABA";
			textValues[i].style.border="1px solid red";
			textValues[i].style.color="red";
		}
		else {
			textValues[i].style.background = "#FFFFFF";
			textValues[i].style.border="1px solid #ccc";
			textValues[i].style.color="#aaa";
		}
	}
}

function checkEmail() {
	for (var i=0; i < emailValues.length; i++) {
		if (emailValues[i].value==null || emailValues[i].value=="") {
			emailValues[i].value = "This field is required!";
			emailValues[i].style.background = "#FFBABA";
			emailValues[i].style.border="1px solid red";
			emailValues[i].style.color="red";
		}
		else {
			emailValues[i].style.background = "#FFFFFF";
			emailValues[i].style.border="1px solid #ccc";
			emailValues[i].style.color="#aaa";
		}
	}
}