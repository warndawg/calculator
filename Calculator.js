var previous = [];

function input(input){
	document.getElementById('result').value += input;
	previous.push(document.getElementById('result').value);
	checkDec();
	 multiDivStart(input);
}

function answer(input){
	var equation = document.getElementById('result').value;
	equation = eval(equation);
	var ans = equation;
	previous.push(ans);
	document.getElementById('result').value = equation;
	createHis();
} 

function createHis(){
	var select = document.getElementById("previousHis");
	for(var i = 0; i < previous.length; i++) {
    	var opt = previous[i];
    	var el = document.createElement("option");
    	el.textContent = opt;
    	el.value = opt;
    	select.appendChild(el);
	};
}

function copyHis(){
	var text = document.getElementById('previousHis').value;
	document.getElementById('result').value = text;
}

function clearHis(){
	location.reload();
}

function checkDec(){
	var check = document.getElementById('result').value;
	var lstTwo = check.substring(check.length - 2, check.length)
	if (lstTwo === '..'){
		alert('you can not put in two decmials in a row');
		document.getElementById('result').value = '';
		return 
	}
	else if (lstTwo === '--' || lstTwo === '++'){
		var doubleNeg = document.getElementById('result').value;
		document.getElementById('result').value = doubleNeg.replace(lstTwo, '+');
	}
}

function multiDivStart(input){
	var check = document.getElementById('result').value;
	if (check === '*' || check === '/'){
		document.getElementById('result').value = check.replace(input, '1'+input);
	}
}
