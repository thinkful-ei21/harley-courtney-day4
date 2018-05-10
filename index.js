'use strict';

$(function() {
  $('.thumbnail').click(event =>
    $('.hero img').attr('src', $(event.currentTarget).find('img').attr('src')));
});
