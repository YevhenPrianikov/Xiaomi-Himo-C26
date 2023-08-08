// $(function(){
//     $('.single-item').slick();
// });


$(function(){
    $('.bike-slider, .slider__items').slick({
        arrows: false,
        // arrows: false - убирает кнопки
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      $(".menu, .bike__column").on("click","a", function (event) {
        // .menu, .bike__column - это родитель ссылок по которым будет кликаться.
        
        //отменяем стандартную обработку нажатия по ссылке
        // ЕСЛИ БУДУТ КАКИЕ_ТО ВНЕШНИЕ ССЫЛКИ ТО ОНИ НЕ БУДУТ РАБОТАТЬ ИЗ_ЗА
        //event.preventDefault();
        event.preventDefault();
    
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
    
        //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
      });

});


// Всё что ниже - это шаблон для плавного перехода по якорям

// $("#menu").on("click","a", function (event) {
//   //отменяем стандартную обработку нажатия по ссылке
//   event.preventDefault();

//   //забираем идентификатор бока с атрибута href
//   var id  = $(this).attr('href'),

//   //узнаем высоту от начала страницы до блока на который ссылается якорь
//     top = $(id).offset().top;
  
//   //анимируем переход на расстояние - top за 1500 мс
//   $('body,html').animate({scrollTop: top}, 1500);
// });