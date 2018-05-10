'use strict';


//Adds items to shopping list

function addItem() {
	
  $('form').on('submit', event => {
    event.preventDefault();
    let newItem = $('.js-shopping-list-entry').val();
    const newHtml =  
	`<li>
	<span class="shopping-item">${newItem}</span>
	<div class="shopping-item-controls">
	  <button class="shopping-item-toggle">
		<span class="button-label">check</span>
	  </button>
	  <button class="shopping-item-delete">
		<span class="button-label">delete</span>
	  </button>
	</div>
  	</li>`;
    $('.shopping-list').append(newHtml);
  });
}

addItem();




//Toggles between shopping list item being checked or not

function checkItem() {

  $('.shopping-list').on('click','.shopping-item-toggle',event => {
    $(event.currentTarget).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked');
		
  });

}

checkItem();



//Deletes item from shopping list

function deleteItem() {

	$('.shopping-list').on('click','.shopping-item-delete', event => {
	   $(event.currentTarget).closest('li').remove();

  });
}

deleteItem();












