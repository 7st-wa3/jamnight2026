(function ($) {
    // ----------------------------------------------------------------
    // ほぼ必須と思われるもの
    // ----------------------------------------------------------------
    $("#jsOnDelete").hide();    // js警告の削除 jsオフだと警告が残る
    // objectFitImages();  // IEのofjectfit対応


    // ----------------------------------------------------------------
    // cookie同意
    // ----------------------------------------------------------------
    const expire = 1; // 有効期限（日）実際使うときは数値を入れて
    let cc = document.querySelector('.cookie-consent');
    let ca = document.querySelector('.cookie-agree');
    const flag = localStorage.getItem('popupFlag');
    if (flag != null) {
        const data = JSON.parse(flag);
        if (data['value'] == 'true') {
            popup();
        } else {
            const current = new Date();
            console.log(current.getTime());
            if (current.getTime() > data['expire']) {
                setWithExpiry('popupFlag', 'true', expire);
                popup();
            }
        }
    } else {
        setWithExpiry('popupFlag', 'true', expire);
        popup();
    }
    ca.addEventListener('click', () => {
        cc.classList.add('cc-hide2');
        setWithExpiry('popupFlag', 'false', expire);
    });
    function setWithExpiry(key, value, expire) {
        const current = new Date();
        expire = current.getTime() + expire * 24 * 3600 * 1000;
        const item = {
        value: value,
        expire: expire
        };
        localStorage.setItem(key, JSON.stringify(item));
    }
    function popup() {
        cc.classList.add('is-show');
    }

})(jQuery);

