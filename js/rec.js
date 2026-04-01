// recruitのみで実行するjs
(function ($) {
    if ($("body.recruit").length > 0) {
        // ----------------------------------------------------------------

        var yousoOffset = [];   // 色を変えたい要素の縦方向中心座標(画面相対)格納用配列
        // ----------------------------------------------------------------
        // イニシャライズ
        // ----------------------------------------------------------------
        function colorChangeInit() {
            var windowHeight = $(window).height();  //ウインドウの高さ取得
            // console.log('画面の高さ：' + windowHeight);

            var pageHeight = $(document).height();
            // console.log(pageHeight);

            var scrollIni = $(window).scrollTop();  //イニシャライズ時点でのスクロール量

            // 色を変える要素ごとの方向中心座標(画面相対)を計算して配列にいれる
            $('#sideMenu .menu .text').each(function (index) {
                var contHeight = $(this).height();
                yousoOffset[index] = $(this).offset().top - scrollIni + (contHeight * 0.5);
            });
            console.log('init!');
            // console.log(yousoOffset);

            colorChangeExe();
        }

        // ----------------------------------------------------------------
        // カラーチェンジ実行
        // ----------------------------------------------------------------
        function colorChangeExe() {
            var blueBgTop = []; //色を変えるエリアの上辺Y座標（画面相対）格納用配列
            var blueBgBtm = []; //色を変えるエリアの下辺Y座標（画面相対）格納用配列

            //色を変えるエリアごとの上辺・下辺Y座標(画面相対)を計算してそれぞれの配列にいれる
            $('.blueBg').each(function (index) {
                var scroll = $(window).scrollTop(); //現在のスクロール量
                // $('#scr-ici').text(scroll);

                // 要素のドキュメント相対位置を取得
                var offset = $(this).offset();

                // 表示領域のスクロール位置を取得
                var scrollTop = $(window).scrollTop();
                // var scrollLeft = $(window).scrollLeft();

                // 表示領域内の上辺の位置を計算
                var topInView = offset.top - scrollTop;

                // ターゲットの高さを取得
                var tgtHeight = $(this).height();

                // 表示領域内の下辺の位置を計算
                var btmInView = topInView + tgtHeight;

                blueBgTop[index] = topInView;
                blueBgBtm[index] = btmInView;

                // 必要に応じて、表示領域内の左辺の位置も計算
                // var leftInView = offset.left - scrollLeft;

                // 結果を表示
                // $('#bbg').text(topInView);
                // $('#bbgEnd').text(btmInView);
            });

            // ----------------------------------------------------------------
            // 実際に色を変える処理
            // ----------------------------------------------------------------
            var changeFlag = [];    //変更フラグ用配列

            for (let i = 0; i < yousoOffset.length; i++) {
                changeFlag[i] = false;  //変更フラグを一旦全部falseにする
            }

            // 色変更要素配列×エリアの上辺下辺配列で判断してフラグ操作
            for (let i = 0; i < yousoOffset.length; i++) {
                for (let j = 0; j < blueBgTop.length; j++) {
                    if ((yousoOffset[i] > blueBgTop[j]) && (yousoOffset[i] < blueBgBtm[j])) {
                        changeFlag[i] = true;
                    }
                }
            }

            //フラグに応じて色変更の実行
            for (let i = 0; i < yousoOffset.length; i++) {
                if (changeFlag[i]) {
                    $('.menues .menu .text').eq(i).addClass('rev');
                } else {
                    $('.menues .menu .text').eq(i).removeClass('rev');
                }
            }
        }

        // ----------------------------------------------------------------
        // スクロール時に実行
        // ----------------------------------------------------------------
        $(window).on("scroll", function () {
            colorChangeExe();

            var footerHeight = $('#footer').height();
            // console.log('footerの高さ' + footerHeight);


            if ($(window).scrollTop() + $(window).height() >= ($(document).height() - footerHeight)) {
                // ページの一番下に到達したときの処理
                // console.log('ページの一番下です');

                var $elem = $('aside#sideMenu')[0];
                if ($elem) {
                    var rect = $elem.getBoundingClientRect();
                    var elemBottom = rect.bottom; // 要素の下辺（画面上でのpx）
                    var windowHeight = $(window).height();
                    var distance = windowHeight - elemBottom; // 画面下辺から要素下辺までの距離
                    // console.log('画面下辺から要素下辺までの距離' + distance);
                }
                if (footerHeight > distance) {
                    $('aside#sideMenu').addClass('hide');
                } else {
                    $('aside#sideMenu').removeClass('hide');
                }
            } else {
                $('aside#sideMenu').removeClass('hide');
            }




        });

        // ----------------------------------------------------------------
        // リサイズ時に実行
        // ----------------------------------------------------------------
        $(window).on("resize", function () {
            // console.log('resize!');
            colorChangeInit();
        });

        colorChangeInit();


        // ----------------------------------------------------------------
    }

    // ----------------------------------------------------------------
    // リクルートトップのみで実行
    // ----------------------------------------------------------------
    if ($("body.recruit.recTop").length > 0) {
        // var hamBtnSub = $('#subHam');     //ハンバーガーメニューボタン
        // var spGnaviSub = $('section#spSubNavi');      //SPナビ要素

        // ヒーローピン
        $('#recTopHero .isom .heroPin').on('click', function () {
            var hPinId = $(this).attr('tgt');
            // console.log('heroPinClick! target:#' + hPinId);
            $('.heroModal#' + hPinId).addClass('is-active');
            // $('#blackBg').fadeIn('fast');
            scrollStop(true);
        });

        //モーダルクローズ
        $('.heroModal .modalClose').on('click', function () {
            // console.log('modalCloseClick!');
            $('.heroModal').removeClass('is-active');
            // $('#blackBg').fadeOut('fast');
            scrollStop(false);
        });
    }


})(jQuery);