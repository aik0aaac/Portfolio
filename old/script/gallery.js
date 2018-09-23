$(function () {
  $(".fancybox").attr('rel', 'group1').fancybox();

  var $container = $('.img-con');
  $container.imagesLoaded(function () {

    $container.masonry({
      itemSelector: '.fancybox',
      columnWidth: 10,
      isFitWidth: true, //親要素の幅に合わせてカラム数を自動調整
      percentPosition: true
    });
  });
});
