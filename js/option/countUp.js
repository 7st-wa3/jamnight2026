// ----------------------------------------------------------------
// カウントアップアニメーション
// ----------------------------------------------------------------
(function ($) {
    const elements = document.querySelectorAll('.countUp');
    const observers = [];

    elements.forEach((element, index) => {
        let counting = false;
        let start, end, duration;

        const observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting === true) {
                if (!counting) {
                    counting = true;
                    start = parseInt(element.dataset.from);
                    end = parseInt(element.dataset.to);
                    duration = parseInt(element.dataset.duration);
                    countUp(start, end, duration, element);
                }
            } else {
                counting = false;
                element.innerText = start.toLocaleString();
            }
        }, { threshold: [0] });

        observers.push(observer);
        observer.observe(element);
    });

    function countUp(start, end, duration, element) {
        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / range));

        let timer = setInterval(function () {
            current += increment;
            element.textContent = current.toLocaleString();
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
})(jQuery);
