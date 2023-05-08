import '../css/style.css';
import '../css/popup.css';
import calltouch from './modules/calltouch';
import calltouch_requests from './modules/calltouch_requests';
import input from './modules/inputmask';
import cookie from './modules/cookie';

calltouch();
closeSelects();
calltouch_requests();
input();
cookie();

// PopUpShowPred();
// PopUpShow2();
// PopUpShowTestDrive();
// PopUpShowService();
// PopUpShowOtdel();
// PopUpShowConfig();
// showCarPopup();
// PopUpHide();
// PopUpHide2();
// PopUpShow();

  function closeSelects() {
    $(".select1").click(function closeSelect1() {
      $('#select1').toggleClass('active');
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    });
    $(".select2").click(function closeSelect2() {
      $('#select2').toggleClass('active');
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    
    });
  }

  function PopUpShow() {
    document.getElementById('popup1').style.display = "flex";
    document.getElementById('nameForm').value = "Форма - заказать обратный звонок";
    document.getElementById('popup_content_name').innerHTML = "Заявка на обратный звонок";
    document.getElementById('popup_content_name').style.width="100%";
    document.getElementById('telpopup').focus();
  }

  function PopUpShowTestDrive() {
    document.getElementById('popup1').style.display = "flex";
    document.getElementById('nameForm').value = "Форма - тест-драйв";
    document.getElementById('popup_content_name').innerHTML = "Тест-драйв OMODA&nbsp;С5";
    document.getElementById('popup_content_name').style.width="100%";
      document.getElementById('telpopup').focus();
  }

  function PopUpShowService() {
    document.getElementById('popup1').style.display = "flex";
    document.getElementById('nameForm').value = "Форма - сервис OMODA&nbsp;С5";
    document.getElementById('popup_content_name').innerHTML = "Сервис OMODA&nbsp;С5";
    document.getElementById('popup_content_name').style.width="100%";
    document.getElementById('telpopup').focus();
  }

  function PopUpShowOtdel() {
    document.getElementById('popup1').style.display = "flex";
    document.getElementById('nameForm').value = "Форма - Отдел продаж OMODA&nbsp;С5";
    document.getElementById('popup_content_name').innerHTML = "Отдел продаж OMODA&nbsp;С5";
    document.getElementById('popup_content_name').style.width="100%";
    document.getElementById('telpopup').focus();
  }

  function PopUpShowConfig() {
    document.getElementById('popup1').style.display = "flex";
    document.getElementById('nameForm').value = "Форма - Подбор конфигурации OMODA&nbsp;С5";
    document.getElementById('popup_content_name').innerHTML = "Подбор конфигурации OMODA&nbsp;С5";
    document.getElementById('popup_content_name').style.width="100%";
    document.getElementById('telpopup').focus();
  }

  function PopUpShowPred() {
    document.getElementById('popup1').style.display = "flex";
    document.getElementById('nameForm').value = "Форма - Получить спецпредложение";
    document.getElementById('popup_content_name').innerHTML = "Получить спецпредложение";
    document.getElementById('popup_content_name').style.width="100%";
    document.getElementById('telpopup').focus();
  }

  function showCarPopup(title, title2 = '') {
    document.getElementById('popup1').style.display = "flex";
    document.getElementById('nameForm').value = `Форма - ${title} ${title2}`;
    document.getElementById('popup_content_name').innerHTML = `${title} \r\n ${title2}`;
    document.getElementById('popup_content_name').style.width="100%";
    document.getElementById('telpopup').focus();
  }

  function PopUpHide() {
    document.getElementById('popup1').style.display = "none";
  }
  
  function PopUpShow2() {
    $("#popupThanks").css('display', 'flex');
  }
  
  function PopUpHide2() {
    $("#popupThanks").hide();
  }
  
  $(function() {
  
    $('.main-block-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  
    // Слайдер "Подобрать комплектацию"
    const $selConfSlick = $('.sel-conf__items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
    });

    $selConfSlick.on('afterChange', function(event, slick, currentSlide){
      $('.sel-conf__nav > li').removeClass('active')
      $('.sel-conf__nav > li').eq(currentSlide).addClass('active')
    });

    $('.sel-conf__nav > li').on('click', function() {
      $selConfSlick.slick('slickGoTo', $(this).index())
      $(this).siblings().removeClass('active')
      $(this).addClass('active')
    });
  
    $('[data-counter]').counter({
      thousandsSep: '',
     });
  
    // Кнопка "Подобрать комплектацию"
    $('.sel-conf-item__send-btn').on('click', function() {
      const $confItem = $(this).closest('.sel-conf-item')
      const confName = $confItem.find('[name="conf_name"]').val()
      showCarPopup('Выбрать комплектацию ', confName)
    });
  
    // Advantages
    const $advantagesSlick = $('.advantages__items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
      adaptiveHeight: true
    });

    const $advantagesHeadersSlick = $('.advantages__headers').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            adaptiveHeight: true
          }
        }
      ]
    });

      $('.advantages__nav > li').on('click', function() {
      $advantagesSlick.slick('slickGoTo', $(this).index())
      $advantagesHeadersSlick.slick('slickGoTo', $(this).index())
      $(this).siblings().removeClass('active')
      $(this).addClass('active')
    });

    $advantagesSlick.on('afterChange', function(event, slick, currentSlide){
      $('.advantages__nav > li').removeClass('active')
      $('.advantages__nav > li').eq(currentSlide).addClass('active')
      $advantagesHeadersSlick.slick('slickGoTo', currentSlide)
    });

    $advantagesHeadersSlick.on('afterChange', function(event, slick, currentSlide){
      $('.advantages__nav > li').removeClass('active')
      $('.advantages__nav > li').eq(currentSlide).addClass('active')
      $advantagesSlick.slick('slickGoTo', currentSlide)
    });
     
  });


  