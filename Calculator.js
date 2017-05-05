var previous = [];
var canOperator = false;

function input(input){
	isOperator(input);
		
	previous.push(document.getElementById('result').value);
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

/*function checkDec(){
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
}*/

function isOperator(char){
	return ['/','*','+','-'].includes(char);
}

function isDec(char){
	return char === '.';
}

function addNum(char){
	document.getElementById('result').value += char;
	canOperator = true;
	printVal();
}

function addOperator(char){
	document.getElementById('result').value += char;
	canOperator = false;
	printVal();
}

function addDec(){

}

//input
//-isOperator
	//-canOperator?

//-isDecimal
	//-canDecimal?
///