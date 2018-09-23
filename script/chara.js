/* --------------------------------------
  chara.js: キャラに関する処理
--------------------------------------- */

// ---------------------------------
// キャラを動かす処理
// ---------------------------------

// ---------------------------------
// 事前準備

// キャラを表示する位置
var CHARA_POS = {
  x: 0,
  y: 0
};
var MAX_WIDTH; // 移動幅の最大値(= #fieldの最大幅)
var MIN_WIDTH; // 移動幅の最小値(= 0)

// キャラの初期座標取得、移動幅の最大値、最小値取得
function setCharaPos() {
  var off = $('#chara').offset();
  CHARA_POS.x = off.left;
  CHARA_POS.y = off.top;

  MAX_WIDTH = $("#field").innerWidth() - 100;
  MIN_WIDTH = 0;
  $('#chara').css({
    left: MIN_WIDTH
  });
  $('#chara').fadeIn("slow");
}
// 方向キーの1回の移動量
var CHARA_MV = 20;
// 最後のページになった際のフラグ: 最終ページなら1
var LAST_PAGE = false;

// キーボードのフラグの連想配列: 1=押されている, 0=離されている
var KEY_FLAG = {
  left: false,
  right: false,
};

// ---------------------------------
// キーボードのイベント -押された
function keydown(event) // 押されたキーのフラグを1にする
{
  console.log("chara.left is " + $('#chara').offset().left);
  console.log("LAST_PAGE is " + LAST_PAGE);
  if (LAST_PAGE) {
    return;
  }
  if (event.keyCode == 37) // key[←]
  {
    KEY_FLAG.left = true;
    CHARA_DIR.left = 1;
    CHARA_DIR.right = 0;
    $('#chara>div').removeAttr("id", CHARA_EMO_NOW);
    $('#chara>div').attr("id", "move");
    $('#chara').addClass("reverse");
    $('#chara').removeClass("no-reverse");
    keyDisplay();
  }
  if (event.keyCode == 39) // key[→]
  {
    KEY_FLAG.right = true;
    CHARA_DIR.left = 0;
    CHARA_DIR.right = 1;
    $('#chara>div').removeAttr("id", CHARA_EMO_NOW);
    $('#chara>div').attr("id", "move");
    $('#chara').addClass("no-reverse");
    $('#chara').removeClass("reverse");
    keyDisplay();
  }
}

function keyDisplay() // キーボード入力を反映して表示座標を更新
{
  if (KEY_FLAG.left) {
    if (CHARA_POS.x >= MAX_WIDTH + 100) {
      CHARA_POS.x = MAX_WIDTH;
    } else if (CHARA_POS.x < MIN_WIDTH) {
      CHARA_POS.x = MIN_WIDTH;
    } else {
      CHARA_POS.x = CHARA_POS.x - CHARA_MV;
    }
  }
  if (KEY_FLAG.right) {
    if (CHARA_POS.x > MAX_WIDTH) {
      CHARA_POS.x = MAX_WIDTH;
    } else if (CHARA_POS.x < MIN_WIDTH) {
      CHARA_POS.x = MIN_WIDTH;
    } else {
      CHARA_POS.x = CHARA_POS.x + CHARA_MV;
    }
  }

  $('#chara').css({
    left: CHARA_POS.x
  });
}

// ---------------------------------
// キーボードのイベント -離された
function keyup(event) // 離されたキーのフラグを0にする
{
  if (LAST_PAGE) {
    return;
  }
  if (event.keyCode == 37) // key[←]
  {
    KEY_FLAG.left = 0;
    $('#chara>div').attr("id", CHARA_EMO_NOW);
    $('#chara>div').removeAttr("id", "move");
  }
  if (event.keyCode == 39) // key[→]
  {
    KEY_FLAG.right = 0;
    $('#chara>div').attr("id", CHARA_EMO_NOW);
    $('#chara>div').removeAttr("id", "move");
  }
}

// ---------------------------------
// ランダムでキャラの表情を出す処理
// ---------------------------------
// キャラの現在方向を保存する: 向いている=1, 向いていない=0
var CHARA_DIR = {
  left: 0,
  right: 1 // 初期は右向き
}

// キャラの表情の種類を詰めた配列
var CHARA_EMO_VARIETION = [
  'def',
  'emo-haifun',
  'emo-line',
  'emo-rtri'
];
// 現在のキャラの表情を入れる
var CHARA_EMO_NOW = CHARA_EMO_VARIETION[0];
// 1つ前のキャラの表情を入れる
var CHARA_EMO_BEFORE = CHARA_EMO_VARIETION[0];

// 瞬きさせる関数
function actBlink(id) {
  $('#chara>div').removeAttr("id", CHARA_EMO_BEFORE);
  $('#chara>div').attr("id", id + "-blink");
  setTimeout(function () {
    $('#chara>div').removeAttr("id", id + "-blink");
    $('#chara>div').attr("id", id);
  }, 200);
};
