(function ($) {
  // ----------------------------------------------------------------
  // SPハンバーガーメニュー設定
  // ----------------------------------------------------------------
  var hamBtn = $("#hamBtn"); //ハンバーガーメニューボタン
  var spGnavi = $("#hamMenu"); //SPナビ要素

  // ハンバーガーメニュー
  hamBtn.on("click", function () {
    // console.log('hmClick!');
    $(this).toggleClass("is-active");
    spGnavi.toggleClass("is-active");
    $("#blackBg").fadeToggle("fast");
    scrollStop(spGnavi.hasClass("is-active"));
    tabindexTabOn(spGnavi.hasClass("is-active"));
  });

  // リサイズ時にハンバーガーをオフにしたり;
  $(window).resize(function () {
    // console.log("resize!");
    hamBtn.removeClass("is-active");
    spGnavi.removeClass("is-active");
    $("#blackBg").fadeOut("fast");
    scrollStop(false);
    tabindexTabOn(false);
  });

  // ----------------------------------------------------------------
  // SPハンバーガーサブ設定
  // ----------------------------------------------------------------
  var hamBtnSub = $("#subHam"); //ハンバーガーメニューボタン
  var spGnaviSub = $("section#spSubNavi"); //SPナビ要素

  // ハンバーガーメニュー
  hamBtnSub.on("click", function () {
    // console.log('hmClick!');
    $(this).toggleClass("is-active");
    spGnaviSub.toggleClass("is-active");
    $("#blackBg").fadeToggle("fast");
    scrollStop(spGnaviSub.hasClass("is-active"));
    tabindexTabOn(spGnaviSub.hasClass("is-active"));
  });

  // ----------------------------------------------------------------
  // ハンバーガー時のtabindex操作
  // ----------------------------------------------------------------
  function tabindexTabOn(flag) {
    var a_all = "0";
    var a_pcNavi = "0";
    var a_spNavi = "-1";
    if (flag) {
      var a_all = "-1";
      var a_pcNavi = "-1";
      var a_spNavi = "0";
    }
    $(".global-layout__contents a, #footer a").attr({
      tabindex: a_all,
    });
    $("#header .gNavi a").attr({
      tabindex: a_pcNavi,
    });
    $("#gNaviSp a").attr({
      tabindex: a_spNavi,
    });
  }
  // $('.naviArea a').attr({
  //     tabindex:"-1"
  // })
  // $('#gNaviSp a').attr({
  //     tabindex:"-1"
  // })
  tabindexTabOn(false);

  // ----------------------------------------------------------------
  // ハンバーガーメニューのサブメニュー
  // ----------------------------------------------------------------
  $(
    "#header .inner#hamMenu .btm .links nav.navi ul.dDownMenuSP li.menu-item-has-children a"
  ).on("click", function () {
    console.log("hamの中のさぶめにゅ！");
    $(this)
      .toggleClass("active")
      .parent()
      .children("ul.sub-menu")
      .slideToggle("fast");
  });
})(jQuery);
