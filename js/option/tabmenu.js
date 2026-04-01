// ----------------------------------------------------------------
// タブメニュー
// ----------------------------------------------------------------
(function($) {
    $('.tabMenu').each(function () {
        $(this).children('.menu').eq(0).addClass('active');
        $(this).next('.tabBoxes').children('.boxes').eq(0).show();
    });
    $('.tabMenu .menu').on('click', function () {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        var index = $(this).parent('.tabMenu').children('.menu').index(this);
        $(this).parent('.tabMenu').next('.tabBoxes').children('.boxes').hide().eq(index).fadeIn('fast');
    });
})( jQuery );
