$('.js-hideup-btn').click(function (e) {
  e.preventDefault();
  $this = $(this);
  

  if (!$this.hasClass('active')) {
    $this.html('Свернуть').addClass('active'); 
    $this.prev('.js-hideup').css('height', 'auto').addClass('active');
  } else {
    $this.html('Подробнее').removeClass('active'); 
    $this.prev('.js-hideup').css('height', '450px').removeClass('active');
  }
});

$('.js-certificates').slick({
  infinite: true,
  arrows: false,
  dots: true,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000
});

$('.js-showToggle-btn').click(function (e) {
  e.preventDefault();
  var toggleText = $(this).data('toggle');
  $(this).closest('.js-showToggle').find('.js-showToggle-text').slideToggle();
  
  $(this).data('toggle', $(this).html());
  $(this).html(toggleText);
})



