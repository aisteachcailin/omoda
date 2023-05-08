export default function calltouch_requests() {
    $(document).ready(function () {
      $("#menu").on("click", "#yakor", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
          top = $(id).offset().top;
        $('body,html').animate({
          scrollTop: top
        }, 1000);
      });
    });
    $(document).ready(function () {
      $("#menu2").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
          top = $(id).offset().top;
        $('body,html').animate({
          scrollTop: top
        }, 1000);
      });
    });
    $('#form').submit(function (e) {
      e.preventDefault()
      e.stopImmediatePropagation()
      $.post(
        'main.php', // адрес обработчика
        $("#form").serialize(), // отправляемые данные

        function (msg) { // получен ответ сервера
          PopUpHide();
          PopUpShow2();
          setTimeout(function () {

            PopUpHide2()

          }, 2500);

        }
      );

      return false;
    });
    $('#form5').submit(function (e) {
      e.preventDefault()
      e.stopImmediatePropagation()
      $.post(
        'main4.php', // адрес обработчика
        $("#form5").serialize(), // отправляемые данные

        function (msg) { // получен ответ сервера
          PopUpHide();
          PopUpShow2();
          setTimeout(function () {

            PopUpHide2()

          }, 2500);
        }
      );

      return false;
    });
    $('#form4').submit(function (e) {
      e.preventDefault()
      e.stopImmediatePropagation()
      $.post(
        'main2.php', // адрес обработчика
        $("#form4").serialize(), // отправляемые данные

        function (msg) { // получен ответ сервера
          PopUpHide();
          PopUpShow2();
          setTimeout(function () {

            PopUpHide2()

          }, 2500);
        }
      );

      return false;
    });
    $('#form3').submit(function (e) {
      e.preventDefault()
      e.stopImmediatePropagation()
      $.post(
        'main3.php', // адрес обработчика
        $("#form3").serialize(), // отправляемые данные

        function (msg) { // получен ответ сервера
          PopUpHide();
          PopUpShow2();
          setTimeout(function () {

            PopUpHide2()

          }, 2500);
        }
      );

      return false;
    });

    jQuery('form').submit(function() {
      var m = jQuery(this).closest('form');
      var phone = m.find('input[type="tel"], input[name*="telephone"]').val();
      var sub = 'Заявка с ' + location.hostname;
      var ct_site_id = '55896';
      var ct_data = {
        phoneNumber: phone,
        subject: sub,
        requestUrl: location.href,
        sessionId: window.call_value
      };
      var ct_valid = !!phone;
      console.log(ct_data, ct_valid);
      /*if (!!ct_valid && window.ct_snd_flag != 1){
        window.ct_snd_flag = 1; setTimeout(function(){ window.ct_snd_flag = 0; }, 20000);
        jQuery.ajax({
          url: 'https://api.calltouch.ru/calls-service/RestAPI/requests/'+ct_site_id+'/register/',  
          dataType: 'json', type: 'POST', data: ct_data, async: false
        });
      } */
      if (!!phone){
              var phone_ct = phone.replace(/[^0-9]/gim, '');
             if (phone_ct != '') {
              if (phone_ct[0] == '8') { phone_ct = phone_ct.substring(1); }
              if (phone_ct[0] == '7') { phone_ct = phone_ct.substring(1); }
              phone_ct = '7' + phone_ct;
              window.ctw.createRequest('default', phone_ct, [], function (success, data) { console.log(success, data); });
          }	
        }
    });
}