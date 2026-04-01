// トップのみで実行するjs
(function ($) {
  if ($("body.top").length > 0) {
    // ----------------------------------------------------------------

    // ----------------------------------------------------------------
    // ニュースタブ
    // ----------------------------------------------------------------
    var ntm = $("#newsTabMenu");
    var ntb = $("#newsTab");

    ntm.children(".link").eq(0).addClass("now");
    ntb.children(".tabBody").eq(0).show();

    ntm.children(".link").on("click", function () {
      ntm.children(".link").removeClass("now");
      $(this).addClass("now");
      var index = ntm.children(".link").index($(this));
      ntb.children(".tabBody").eq(index).slideDown();
      ntb
        .children(".tabBody")
        .not(":eq(" + index + ")")
        .slideUp();
    });

    // ----------------------------------------------------------------
    // ヒーロースライダー
    // ----------------------------------------------------------------
    var heroSlide = $("#HeroSlide").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      fade: true,
      pauseOnHover: false,
      arrows: false,
      speed: 1000,
      // variableWidth: true,
      // slidesToShow: 3,
      // centerMode: true,
      // responsive: [
      //   {
      //     breakpoint: 1280,
      //     settings: {
      //       variableWidth: false,
      //     },
      //   },
      // ],
    });

    // ----------------------------------------------------------------
    // ピックアップスライダー
    // ----------------------------------------------------------------
    var puSlide = $("#puSlide").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      fade: false,
      pauseOnHover: false,
      arrows: false,
      speed: 1000,
      variableWidth: true,
      // slidesToShow: 3,
      // centerMode: true,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            variableWidth: false,
          },
        },
      ],
    });

    $("#pickup .control #slider-prev").on("click", function () {
      puSlide.slick("slickPrev");
    });
    $("#pickup .control #slider-next").on("click", function () {
      puSlide.slick("slickNext");
    });

    $("#pickup .control #slider-pause").on("click", function () {
      $(this).parent().addClass("paused");
      puSlide.slick("slickPause");
    });
    $("#pickup .control #slider-play").on("click", function () {
      $(this).parent().removeClass("paused");
      puSlide.slick("slickPlay");
    });

    // $(window).on('resize', function () {
    //     // console.log('screen size chenged!');
    //     topSlide.slick('setPosition');
    //     // panelNewsSlide.slick('setPosition');
    // });

    // ----------------------------------------------------------------
  }
})(jQuery);
