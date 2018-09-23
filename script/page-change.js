/* --------------------------------------
  page-change.js: ページ遷移の処理
--------------------------------------- */

// ---------------------------------------
// 全ページを載せた配列
// ---------------------------------------
var PAGE_ALL = [
  "page-index.html",
  "page-intro.html",
  "page-history.html",
  "page-skill.html",
  "page-gallery.html",
  "page-end.html"
  ];

// ---------------------------------------
// 全ページのフラグ
// ---------------------------------------
var FLAG_PAGE = {
  "page-index.html": 1,
  "page-intro.html": 0,
  "page-history.html": 0,
  "page-skill.html": 0,
  "page-gallery.html": 0,
  "page-end.html": 0
};
// ---------------------------------------
// 全ページの対応する日本語
// ---------------------------------------
var PAGE_JA = {
  "page-index.html": "最初に",
  "page-intro.html": "自己紹介",
  "page-history.html": "経歴",
  "page-skill.html": "スキル",
  "page-gallery.html": "作品集",
  "page-end.html": "最後に"
}

// ---------------------------------------
//ページを取得してくる関数
// ---------------------------------------
function getPage(elm) {
  // NEXTボタンの表示変更
  if (elm == "page-end.html") {
    $('#next').hide();
  } else {
    $('#next .sub').html(PAGE_JA.elm + 'へ');
  }
  // ページ内容読み込み
  $.ajax({
    type: 'GET',
    url: elm,
    dataType: 'html',
    success: function (data) {
      $('#page-display').html(data).fadeIn(1000);
    },
    error: function () {
      swal("問題が生じました!",
        "お手数ですが、ページを再読み込みしてください。",
        "error");
    }
  });
  // Y軸方向のスクロールを禁止する

  if (elm != "page-index.html" && elm != "page-end.html") {
    $('#page-ctrl').css({
      'zoom': '.5'
    });
  }

  if (elm == "page-skill.html" || elm == "page-gallery.html") {
    console.log("body hidden");
    $('body').css({
      'overflow-x': 'hidden',
      'overflow-y': 'auto'
    });
    $('main').css({
      'background': 'none'
    });
  } else {
    console.log("body auto");
    $('body').css({
      'overflow-x': 'hidden',
      'overflow-y': 'hidden',
    });
    //    $('main').css({
    //      'background-image': 'url(../img/bg.png)',
    //      'background-size': 'contain'
    //    });
  }
  // 上部にスクロールを戻す
  $('html,body').animate({
    scrollTop: 0
  }, 'fast');
}

// ---------------------------------------
// 次のページへ遷移(キャラ移動)
// ---------------------------------------
function pageChange() {
  // まだ行ってないページのリンク先を検索、保存
  console.log("-----------------------");
  var link;
  for (var f in FLAG_PAGE) {
    if (!FLAG_PAGE[f]) {
      link = f;
      console.log(f);
      FLAG_PAGE[f] = 1;
      break;
    }
  }
  // ページ内容のフェードアウト、ページ表示へ
  $('#page-display').fadeOut(1000, function () {
    if (link == "page-end.html") {
      LAST_PAGE = true;
    }
    //キャラの位置を変える
    setCharaPos();
    getPage(link);
  });
}

// ---------------------------------------
// 次のページへ遷移(controlボタン操作)
// ---------------------------------------
function pageChange_ctrl(link) {
  // ページ内容のフェードアウト、ページ表示へ
  $('#page-display').fadeOut(1000, function () {
    FLAG_PAGE.link = true;
    if (link == "page-end.html") {
      LAST_PAGE = true;
    }
    //キャラの位置を変える
    setCharaPos();
    getPage(link);
  });
}
