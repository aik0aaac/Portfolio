$(function () {
  $('#web-btn').click(function () {
    $('body,html').animate({
      scrollTop: $('#web-con').offset().top
    }, 500, 'swing');
  });
  $('#illust-btn').click(function () {
    $('body,html').animate({
      scrollTop: $('#illust-con').offset().top
    }, 500, 'swing');
  });

  var $container = $('.img-con');
  $container.imagesLoaded(function () {
    $container.masonry({
      itemSelector: '.thumbnail',
      columnWidth: 10,
      isFitWidth: true, //親要素の幅に合わせてカラム数を自動調整
      percentPosition: true,
      animationOptions: {
        dulation: 2000,
        easing: 'swing'
      }
    });
    $('.fancybox').attr('rel', 'group1').fancybox();
  });
  // -----------------------------------------
  // 各イラストの詳細を表示する処理
  // -----------------------------------------
  // fan-art ---------------------------
  $('#fan-art-1').click(function () {
    displayModalWindow('#con-fan-art-1', "ModalWindow_close")
  });
  $('#fan-art-2').click(function () {
    displayModalWindow('#con-fan-art-2', "ModalWindow_close")
  });
  $('#fan-art-3').click(function () {
    displayModalWindow('#con-fan-art-3', "ModalWindow_close")
  });
  $('#fan-art-4').click(function () {
    displayModalWindow('#con-fan-art-4', "ModalWindow_close")
  });
  $('#fan-art-5').click(function () {
    displayModalWindow('#con-fan-art-5', "ModalWindow_close")
  });
  $('#fan-art-6').click(function () {
    displayModalWindow('#con-fan-art-6', "ModalWindow_close")
  });
  $('#fan-art-7').click(function () {
    displayModalWindow('#con-fan-art-7', "ModalWindow_close")
  });
  $('#fan-art-8').click(function () {
    displayModalWindow('#con-fan-art-8', "ModalWindow_close")
  });
  $('#fan-art-9').click(function () {
    displayModalWindow('#con-fan-art-9', "ModalWindow_close")
  });
  $('#fan-art-10').click(function () {
    displayModalWindow('#con-fan-art-10', "ModalWindow_close")
  });
  $('#fan-art-11').click(function () {
    displayModalWindow('#con-fan-art-11', "ModalWindow_close")
  });
  $('#fan-art-12').click(function () {
    displayModalWindow('#con-fan-art-12', "ModalWindow_close")
  });
  $('#fan-art-13').click(function () {
    displayModalWindow('#con-fan-art-13', "ModalWindow_close")
  });
  $('#fan-art-14').click(function () {
    displayModalWindow('#con-fan-art-14', "ModalWindow_close")
  });
  $('#fan-art-15').click(function () {
    displayModalWindow('#con-fan-art-15', "ModalWindow_close")
  });
  $('#fan-art-16').click(function () {
    displayModalWindow('#con-fan-art-16', "ModalWindow_close")
  });
  $('#fan-art-17').click(function () {
    displayModalWindow('#con-fan-art-17', "ModalWindow_close")
  });
  $('#fan-art-18').click(function () {
    displayModalWindow('#con-fan-art-18', "ModalWindow_close")
  });
  $('#fan-art-19').click(function () {
    displayModalWindow('#con-fan-art-19', "ModalWindow_close")
  });
  $('#fan-art-20').click(function () {
    displayModalWindow('#con-fan-art-20', "ModalWindow_close")
  });
  $('#fan-art-21').click(function () {
    displayModalWindow('#con-fan-art-21', "ModalWindow_close")
  });
  $('#fan-art-22').click(function () {
    displayModalWindow('#con-fan-art-22', "ModalWindow_close")
  });
  $('#fan-art-23').click(function () {
    displayModalWindow('#con-fan-art-23', "ModalWindow_close")
  });
  $('#fan-art-24').click(function () {
    displayModalWindow('#con-fan-art-24', "ModalWindow_close")
  });
  $('#fan-art-25').click(function () {
    displayModalWindow('#con-fan-art-25', "ModalWindow_close")
  });
  $('#fan-art-26').click(function () {
    displayModalWindow('#con-fan-art-26', "ModalWindow_close")
  });
  $('#fan-art-27').click(function () {
    displayModalWindow('#con-fan-art-27', "ModalWindow_close")
  });
  $('#fan-art-28').click(function () {
    displayModalWindow('#con-fan-art-28', "ModalWindow_close")
  });
  // original ---------------------------
  $('#original-1').click(function () {
    displayModalWindow('#con-original-1', "ModalWindow_close")
  });
  $('#original-2').click(function () {
    displayModalWindow('#con-original-2', "ModalWindow_close")
  });
  $('#original-3').click(function () {
    displayModalWindow('#con-original-3', "ModalWindow_close")
  });
  $('#original-4').click(function () {
    displayModalWindow('#con-original-4', "ModalWindow_close")
  });
  $('#original-5').click(function () {
    displayModalWindow('#con-original-5', "ModalWindow_close")
  });
  $('#game-1').click(function () {
    displayModalWindow('#con-game-1', "ModalWindow_close")
  });
  $('#game-2').click(function () {
    displayModalWindow('#con-game-2', "ModalWindow_close")
  });
});

/** ---------------------------------------------
 *  ユーザーのデバイスを返す
 *  @return     スマホ(sp)、タブレット(tab)、その他(other)
 --------------------------------------------- */
function getDevice() {
  var ua = navigator.userAgent;
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    return 'sp';
  } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
    return 'tab';
  } else {
    return 'other';
  }
}

/** ---------------------------------------------
 * モーダルウィンドウ表示関数
 * @param val 表示したいモーダルウィンドウのコンテンツのID/Class(文字列で)
 * @param func モーダルウィンドウを閉じる関数名(文字列で)
 --------------------------------------------- */
var CurrentScrollY; // 今のY軸方向のスクロール位置を入れる
function displayModalWindow(val, func) {
  CurrentScrollY = $(window).scrollTop();
  $("body").css({
    "position": "fixed",
    "top": (-1 * CurrentScrollY)
  });
  $(val).css({
    "display": "block"
  });
  //キーボード操作などにより、オーバーレイが多重起動するのを防止する
  $(this).blur(); //ボタンからフォーカスを外す
  if ($("#modal-overlay")[0]) return false; //新しくモーダルウィンドウを起動しない
  //オーバーレイ用のHTMLコードを、[body]内の最後に生成する
  $("body").append('<div id="modal-overlay" onclick="' + func + '()"></div>');
  //[$modal-overlay]をフェードインさせる
  $("#modal-overlay").fadeIn("slow");
  $(val).fadeIn("slow");
  // センタリングをする
  var jud = getDevice();
  console.log(jud);
  if (jud == 'sp') {
    var pxleft = (($(window).width() - $(val).outerWidth(true)) / 2);
    $(val).css({
      "left": pxleft + "px",
    });
  } else {
    // その他だったら、ウインドウを中央に設定
    // ※真ん中配置：(ウィンドウの幅∨高さ - コンテンツの幅∨高さ) /2
    var pxleft = (($(window).width() - $(val).outerWidth(true)) / 2);
    $(val).css({
      "left": pxleft + "px",
    });
  }
}

/** ---------------------------------------------
 * モーダルウィンドウを閉じる関数
 * @param val 表示したいモーダルウィンドウのコンテンツのID/Class(文字列で)
 --------------------------------------------- */
function ModalWindow_close() {
  $('.des-illust').fadeOut("slow");
  $("#modal-overlay").fadeOut("slow");
  $("#modal-overlay").unbind() // unbind()…対象の要素にそれまで設定されていたイベントをクリアする
  $("#modal-overlay").remove(); //フェードアウト後、[#modal-overlay]をHTML(DOM)上から削除
  $("body").attr({
    style: ''
  });
  $("html,body").prop({
    scrollTop: CurrentScrollY
  });
}
