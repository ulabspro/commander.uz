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
