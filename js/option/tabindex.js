// ----------------------------------------------------------------
// gNaviSp の tabindex 切り替え 処理
// ----------------------------------------------------------------
(function($) {

    function tabindexTabOn(flag) {

        var a_all = "0"
        var a_pcNavi = "0"
        var a_spNavi = "-1"
        if (flag) {
            var a_all = "-1"
            var a_pcNavi = "-1"
            var a_spNavi = "0"
        }
        $('.global-layout__contents a, #footer a').attr({
            tabindex: a_all
        });
        $('#header .gNavi a').attr({
            tabindex: a_pcNavi
        });
        $('#gNaviSp a').attr({
            tabindex: a_spNavi
        });
    }
    tabindexTabOn(false);   // 最初にタブインデックスを全体に付与

})( jQuery );
