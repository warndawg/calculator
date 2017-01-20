function message(number){
	if (number === 1 || number === 2) {
		document.getElementById('result').innerHTML = "You clicked button number " + number;
	} else {
		document.getElementById('result').innerHTML = "You clicked the wrong button";
	}
}