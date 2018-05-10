'use strict';



function addItem() {

	$('#number-chooser').on('submit', event => {
		event.preventDefault();

}




//Toggles between shopping list item being checked or not

function checkItem() {

	$('.shopping-item-toggle').click(event => {
		$(event.currentTarget).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked');
		
	});

}

checkItem();
