// ----------------------------------------------------------------
// ヘッダをfixed等で固定した場合のアンカーリンクのズレを解消舌スムーズスクロール
// ----------------------------------------------------------------
(function ($) {
  var header = $("#header"); //ヘッダの要素
  var hosei = 100; //補正値
  var headerHight = header.height();
  headerHight += hosei;
  // console.log('headerHight:' + headerHight);
  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset(); // + headerHight; //ヘッダの高さ分位置をずらす
    var posi = position.top - headerHight;
    // console.log('posi:' + posi);
    $("html, body").animate({ scrollTop: posi }, 200, "swing");
    return false;
  });

  // ----------------------------------------------------------------
  // 外部からアンカーへ来た場合の補正
  // ----------------------------------------------------------------
  $(window).on("load", function () {
    var url = $(location).attr("href");
    if (url.indexOf("#") != -1) {
      var anchor = url.split("#");
      var target = $("#" + anchor[anchor.length - 1]);
      // console.log('外部からアンカーへ来た場合の補正');
      if (target.length) {
        var pos = Math.floor(target.offset().top) - 150;
        $("html, body").animate({ scrollTop: pos }, 200, "swing");
      }
    }
  });

  // ----------------------------------------------------------------
  // 通常のスムーズスクロール ↑を使わない場合はこっち
  // ----------------------------------------------------------------
  // $('a[href^="#"]').click(function () {
  //     var speed = 500;
  //     var href = $(this).attr("href");
  //     var target = $(href == "#" || href == "" ? 'html' : href);
  //     var position = target.offset().top;
  //     $("html, body").animate({ scrollTop: position }, speed, "swing");
  //     return false;
  // });
})(jQuery);
