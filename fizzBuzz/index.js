'use strict';

function fizzBuzz(num) {

  if(num % 15 === 0) return; 
  `<div class="fizz-buzz-item fizzbuzz">
  <span>fizzbuzz</span>
  </div>`;
  if(num % 5 === 0) return; 
  `<div class="fizz-buzz-item buzz">
  <span>buzz</span>
  </div>`;
  if(num % 3 === 0) return 
  `<div class="fizz-buzz-item fizz">
  <span>fizz</span>
  </div>`;
  return `<div class="fizz-buzz-item">
  <span>1</span>
  </div>`;
}

function generateValues(num) {
  let result = [];
  for(let i = 1; i <= num; i++){
    result.append(fizzBuzz(num));
  }
  return result;
}


function getUserValue() {
  $('#number-chooser').on('submit', event => {
    	event.preventDefault();
    	let valueArray = generateValues(parseInt($('#number-choice').val(), 10));
  });
}




// function result() {
// 	getUserValue();
// }


// result()


