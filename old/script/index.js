$(function () {
  //  loaderの表示処理 ------
  $('#body-wrap').css('display', 'none');
  $('#loader-bg, #loader').css('display', 'block');

  setTimeout(function () {
    $('#body-wrap').css('display', 'block');
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
  }, 1000);

});
