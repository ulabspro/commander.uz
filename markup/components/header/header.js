$(window).on('scroll', function () {
    var offsetScroll = $(this).scrollTop();
    $('.header-menu a').each(function () {
        $obj = $(this);
        var id = $obj.attr('href'),
            top = $(id).offset().top;

        if (offsetScroll >= top - 120) {
            $obj.siblings().removeClass('active');
            $obj.addClass('active');
        } else if (offsetScroll == 0) {
            $('.header-menu a').removeClass('active');
        } else if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            $obj.siblings().removeClass('active');
            $('.header-menu a').last().addClass('active');
        }
    });
    if (offsetScroll >= 50) {
        $('.header').addClass('fixed');
    } else if (offsetScroll <= 50) {
        $('.header').removeClass('fixed');
    }
});

$(document).ready(function(){
  $('.header-menu').on('click','a', function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    $obj = $(this);

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    if (id == '#about') {
        setTimeout(function () {
            $('body,html').animate({scrollTop: top - 272}, 1000);
        }, 400);
    } else {
        $('body,html').animate({scrollTop: top - 70}, 1000);
    }
    
  });
});