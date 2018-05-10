'use strict';

function fizzBuzz(num) {

	if(num % 15 === 0) return 'fizzbuzz';
	if(num % 5 === 0) return 'buzz';
	if(num % 3 === 0) return 'fizz';
	return num;
}


function getUserValue() {
	$('#number-chooser').on('submit', event => {
    	event.preventDefault();
    	let num = parseInt($('#number-choice').val(), 10);
    });
}




// function result() {
// 	getUserValue();
// }


// result()


