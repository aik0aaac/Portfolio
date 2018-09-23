// control-btnを押してないか: 押した=true, 押してない=false
var CONTROL_BTN_FLAG = false;

function ctrlBtn(id) {
  console.log("-----------------skill");
  $(id + '-btn').click(function () {
    if (!CONTROL_BTN_FLAG) {
      CONTROL_BTN_FLAG = true;
      $('#control-btn').animate({
        opacity: "0"
      }, 500, function () {
        $('#control-btn').hide();
        $('#control-btn').attr("id", "control-btn-clicked");
        $('#control-btn').removeAttr("id", "control-btn");
        $('#control-btn-clicked').show();
        $('#control-btn-clicked').animate({
          opacity: "1"
        }, 500);
        $(id + '-con').show();
        $(id + '-con').animate({
          opacity: "1"
        }, 500);
      });
    } else {
      $('.sub-sec').animate({
        opacity: "0"
      }, 500, function () {
        $('.sub-sec').hide();
        $(id + '-con').show();
        $(id + '-con').animate({
          opacity: "1"
        }, 500);
      });
    }
  });
}

$(function () {
  ctrlBtn('#engineer');
  ctrlBtn('#designer');
  ctrlBtn('#ex');
});
