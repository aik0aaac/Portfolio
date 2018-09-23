/* --------------------------------------
  main.js: 実際に実行される処理
--------------------------------------- */

// ---------------------------------
// キーボードのイベント検出
document.onkeydown = keydown; // 押された時
document.onkeyup = keyup; // 離された時


$(function () {
  pageChange_ctrl("page-index.html");
  // loaderの表示処理 
  setTimeout(function () {
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
  }, 2000);

  setInterval(function () {
      if (LAST_PAGE) {
        return;
      }
      var rand = Math.round(Math.random() * (CHARA_EMO_VARIETION.length - 1));
      CHARA_EMO_NOW = CHARA_EMO_VARIETION[rand];
      actBlink(CHARA_EMO_VARIETION[rand]);
      CHARA_EMO_BEFORE = CHARA_EMO_VARIETION[rand];

      // ページ遷移の判定: キャラが指定位置に着いたら発動
      var chara = $('#chara').offset();
      console.log("MAX_WIDTH is " + MAX_WIDTH);
      console.log("chara.left is " + chara.left);
      if (chara.left > (MAX_WIDTH - 100)) {
        console.log("action!");
        $('#chara').fadeOut("slow");
        pageChange();
      }
    },
    2000);

  // 各ページへ遷移するボタンの処理
  $('#page-ctrl #index').click(function () {
    pageChange_ctrl("page-index.html");
  });
  $('#page-ctrl #intro').click(function () {
    pageChange_ctrl("page-intro.html");
  });
  $('#page-ctrl #history').click(function () {
    pageChange_ctrl("page-history.html");
  });
  $('#page-ctrl #skill').click(function () {
    pageChange_ctrl("page-skill.html");
  });
  $('#page-ctrl #gallery').click(function () {
    pageChange_ctrl("page-gallery.html");
  });
  $('#page-ctrl #end').click(function () {
    pageChange_ctrl("page-end.html");
  });

});
