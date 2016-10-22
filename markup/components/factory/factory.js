$('.js-accordion-item').click(function () {
  $(this).toggleClass('active');
  $(this).find('.factory-accordion__description').slideToggle().toggleClass('active');
});