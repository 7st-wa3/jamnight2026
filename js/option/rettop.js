// ----------------------------------------------------------------
// トップに戻るボタン
// ----------------------------------------------------------------
(function ($) {
    $(window).on('load', function () {
        var topBtn = $('#pageTop,#pageTopSp');
        // topBtn.hide();
        $(window).scroll(function () {
            var scroll = $(this).scrollTop();
            // console.log(scroll);
            if (scroll > 240) {
                topBtn.addClass("active");
            } else {
                topBtn.removeClass("active");
            }
        });

        topBtn.on('click', function () {
            console.log('ret top !');
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
})(jQuery);