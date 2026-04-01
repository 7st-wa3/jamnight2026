// ----------------------------------------------------------------
// アコーディオン
// ----------------------------------------------------------------
(function ($) {
    $('.acdjs article header').on('click', function () {
        $(this).toggleClass('active').next('main').slideToggle('fast');
    });
})(jQuery);
