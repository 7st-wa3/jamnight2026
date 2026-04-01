(function ($) {
  // $(".dDownMenu .menu-item-has-children a").on("click", function () {
  //   // $(".dDownMenu .menu-item-has-children.open").removeClass("open");
  //   $(this).parent().toggleClass("open");
  // });
  function screenWidthCheck() {
    if (screenWidthOver(821)) {
      console.log("821以上");
      $(".megaMenu .subLinks").show();
    } else {
      console.log("821以下");
      $(".megaMenu").removeClass("is-active");
      $(".megaMenu .subLinks").hide();
    }
  }

  $(window).resize(function () {
    // 画面幅が変更されたときに実行させたい処理内容
    screenWidthCheck();
  });

  screenWidthCheck();

  $(".megaMenu").on("click", function () {
    if (screenWidthOver(821)) {
    } else {
      $(this).toggleClass("is-active").children(".subLinks").slideToggle(300);
    }
  });

  // ----------------------------------------------------------------
  // megaMenu
  // ----------------------------------------------------------------
  $(".naviHead").on("click", function () {
    console.log("click!");
    var tgt = $(this).attr("sub");
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".megaMenues").removeClass("active");
    } else {
      $(".naviHead").removeClass("open");
      $(this).addClass("open");
      $(".megaMenues").addClass("active");
    }

    $(".megaMenues .megaMenu").removeClass("active");
    $(".megaMenues #" + tgt).addClass("active");
  });
})(jQuery);
