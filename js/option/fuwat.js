// ----------------------------------------------------------------
// ふわっと関連
// ----------------------------------------------------------------
(function ($) {
  function fuwatCheck() {
    frameInCheck($(".fuwat"), "active", 200);
  }

  $(window).on("load", function () {
    $(window).on("scroll", function () {
      fuwatCheck();
    });
    fuwatCheck();
  });
})(jQuery);
