 // 旅行商品のみで実行するJs
(function ($) {
    if ($("body.product").length > 0) {
        //- ラジオボタンを解除できるようにする
        'use strict';
        {
            window.addEventListener('DOMContentLoaded', function () {
                const
                    radioElements = document.querySelectorAll('input[type=radio]'),
                    state = {};

                for (let i = 0; i < radioElements.length; ++i) {
                    radioElements[i].addEventListener('click', function () {
                        if (state[this.name] === this.value) {
                            state[this.name] = this.checked = false;
                            checkRadios();
                        } else {
                            state[this.name] = this.value;
                        }
                    });
                }
            });
        }

        var planFlag = undefined;
        var leaveFlag = undefined;


        //ラジオボタンの状態を調べる
        function checkRadios(plan, leave) {
            planFlag = $('input[name="plan"]:checked').val();
            leaveFlag = $('input[name="leave"]:checked').val();
            console.log('planFlag:' + planFlag);
            console.log('leaveFlag:' + leaveFlag);

            if (planFlag == undefined && leaveFlag == undefined) {
                $('.cards article').each(function () {
                    $(this).fadeIn(400);
                });
            } else if (planFlag != undefined && leaveFlag == undefined) {
                $('.cards article').each(function () {
                    $(this).hide();
                    if ($(this).hasClass(planFlag)) {
                        $(this).fadeIn(400);
                    }
                });
            } else if (planFlag == undefined && leaveFlag != undefined) {
                $('.cards article').each(function () {
                    $(this).hide();
                    if ($(this).hasClass(leaveFlag)) {
                        $(this).fadeIn(400);
                    }
                });
            } else {
                $('.cards article').each(function () {
                    $(this).hide();
                    if (($(this).hasClass(planFlag)) && ($(this).hasClass(leaveFlag))) {
                        $(this).fadeIn(400);
                    }
                });
            }
        }


        // ラジオボタンに変化があったとき発動
        $('input[name="plan"]:radio').change(function () {
            checkRadios();
        });
        $('input[name="leave"]:radio').change(function () {
            checkRadios();
        });
    }
})(jQuery);