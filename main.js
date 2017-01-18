(function() {

var res = document.getElementById('result'),
	expression = document.getElementById('expression'),
	out = document.querySelector('#out'),
	button = document.querySelectorAll('button'),
	count = 0,
	operator = false,
	localNumber,
	result;

res.innerHTML = ''; // max, result.length == 12  
expression.innerHTML = '';



for (var i = 0; i < button.length; i++) {
    result = button[i];
    result.addEventListener('click', clicked);
}

function clicked(e) {

	var test = res.innerHTML;
	var testExp = expression.innerHTML;
    var local = this.innerText
    var out = e.toElement.innerHTML;

    switch(local) {
	    case 'CE':
			res.innerHTML = '';
			expression.innerHTML = '';
			break;
		case '√':
			res.innerHTML = Math.pow(test, 1/2).toFixed(1) % 1 == 0 ? Math.pow(test, 1/2) : Math.pow(test, 1/2).toFixed(1);
			expression.innerHTML = '√' + test;
			break;
		case 'n²':
			res.innerHTML = Math.pow(test, 2);
			expression.innerHTML = test + '²';
			break;
		case '÷':
			if (res.innerHTML == '') {
				expression.innerHTML = '';
			}
			if (!operator) {
				localNumber = res.innerHTML;
				if (localNumber != '') {
					expression.innerHTML += '/';
				}
				operator = true;
			} 
			break;
		case '×':
			if (!operator) {
				localNumber = res.innerHTML;
				if (localNumber != '') {
					expression.innerHTML += '*';
				}
				operator = true;
			} 
			break;
		case '-':
			if (res.innerHTML == '') {
				expression.innerHTML = '';
			}
			if (!operator) {
				localNumber = res.innerHTML;
				if (localNumber != '') {
					expression.innerHTML += out;
				}
				operator = true;	
			}		
			break;
		case '+':
			if (res.innerHTML == '') {
				expression.innerHTML = '';
			}
			if (!operator) {
				localNumber = res.innerHTML;
				if (localNumber != '') {
					expression.innerHTML += out;
				}
				operator = true;	
			}						
			break;
		case '0':
			if (operator == true) {
				res.innerHTML = '';
				operator = false;
			}		
			res.innerHTML == '' || res.innerHTML == 0 ? res.innerHTML = out : res.innerHTML += out;
			expression.innerHTML == '' || expression.innerHTML == 0 ? expression.innerHTML = '0' : expression.innerHTML += out;
			break;
		case '1':
			if (operator == true) {
				res.innerHTML = '';
				operator = false;
			}		
			res.innerHTML += out;
			expression.innerHTML += out;
			break;
		case '2':
			if (operator == true) {
				res.innerHTML = '';
				operator = false;
			}		
			res.innerHTML += out;
			expression.innerHTML += out;
			break;
		case '3':
			if (operator == true) {
				res.innerHTML = '';
				operator = false;
			}		
			res.innerHTML += out;
			expression.innerHTML += out;
			break;
		case '4':
			if (operator == true) {
				res.innerHTML = '';
				operator = false;
			}		
			res.innerHTML += out;
			expression.innerHTML += out;
			break;
		case '5':
			if (operator == true) {
				res.innerHTML = '';
				operator = false;
			}		
			res.innerHTML += out;
			expression.innerHTML += out;
			break;
		case '6':
			if (operator == true) {
				res.innerHTML = '';
				operator = false;
			}		
			res.innerHTML += out;
			expression.innerHTML += out;
			break;
		case '7':
			if (operator == true) {
				res.innerHTML = '';
				operator = false;
			}
			res.innerHTML += out;
			expression.innerHTML += out;
			break;
		case '8':
			if (operator == true) {
				res.innerHTML = '';
				operator = false;
			}
			res.innerHTML += out;
			expression.innerHTML += out;
			break;
		case '9':
			if (operator == true) {
				res.innerHTML = '';
				operator = false;
			}
			res.innerHTML += out;
			expression.innerHTML += out;
			break;
		case '.':
			var found = res.innerHTML.match(/\./g);
			if (found == null || found.length < 1) {
				res.innerHTML == '' ? '' : res.innerHTML += out;
				expression.innerHTML == '' ? '' : expression.innerHTML += out;
			}
			break;
		case '=':
			// console.log(isNaN(parseInt(test)) ? 0 : parseInt(test));
			// console.log(localNumber);
			res.innerHTML = eval(expression.innerHTML).toFixed(1) % 1 == 0 ? eval(expression.innerHTML) : eval(expression.innerHTML).toFixed(1);
			expression.innerHTML = res.innerHTML;
			break;
    }  
    

} 



})()










