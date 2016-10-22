$('.js-showToggle-btn').click(function (e) {
  e.preventDefault();
  var toggleText = $(this).data('toggle');
  $(this).closest('.js-showToggle').find('.js-showToggle-text').slideToggle();
  
  $(this).data('toggle', $(this).html());
  $(this).html(toggleText);
})