// ----------------------------------------------------------------
// フォントサイズ変更
// ----------------------------------------------------------------
(function ($) {
    // $('.acdjs article header').on('click', function () {
    //     $(this).toggleClass('active').next('main').slideToggle('fast');
    // });

    var ratio = 10;

    $('.size-lTrg').on('click', function () {
        ratio = 12;
        $("#header .size .btn").removeClass('active');
        $(this).addClass('active');
        document.documentElement.style.setProperty('--font-size-ratio', `${ratio / 10}`);
        console.log('--font-size-ratio:' + (ratio / 10));
    });

    $('.size-sTrg').on('click', function () {
        ratio = 10;
        $("#header .size .btn").removeClass('active');
        $(this).addClass('active');
        document.documentElement.style.setProperty('--font-size-ratio', `${ratio / 10}`);
        console.log('--font-size-ratio:' + (ratio / 10));
    });

    $('.size-maxTrg').on('click', function () {
        ratio = 15;
        $("#header .size .btn").removeClass('active');
        $(this).addClass('active');
        document.documentElement.style.setProperty('--font-size-ratio', `${ratio / 10}`);
        console.log('--font-size-ratio:' + (ratio / 10));
    });

    $('#header .system .lang').on('click', function () {
        $(this).toggleClass('active');
        $(this).children('.sub').slideToggle(200);
    });
    $('#hamMenu .headMenu .lang').on('click', function () {
        $(this).toggleClass('active');
        $(this).children('.sub').slideToggle(200);
    });

})(jQuery);
