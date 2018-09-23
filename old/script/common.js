$(function () {
  //  ページトップへ移動処理 ------
  $(window).scroll(function () {
    var pos = $(window).scrollTop();
    if (200 < pos) {
      $('#to-pagetop').fadeIn('slow');
    } else {
      $('#to-pagetop').fadeOut('slow');
    }
  });

  $('#to-pagetop').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 'fast');
  });
});
