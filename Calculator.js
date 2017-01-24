var previous = [];

function input(input){
	document.getElementById('result').value += input;
	previous.push(document.getElementById('result').value)
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