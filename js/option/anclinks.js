// ----------------------------------------------------------------
// オートアンカー v2
// .ancLinks.auto があれば自動でアンカーリンクを作る。
// ----------------------------------------------------------------
(function ($) {
  let ancLinks = $(".ancLinksBase.auto .ancLinks");
  let tobisaki = $(".ancLink");
  let area = $("#mainCont");

  function autoAnc(base, hani, no) {
    // console.log('base:' + base);
    // console.log('hani:' + hani);

    if (tobisaki.length) {
      base.show();
      hani.find(".ancLink").each(function (index) {
        const id = $(this).attr("id");
        // console.log('id:' + id);
        const nakami = $(this).text();
        // console.log('nakami:' + nakami);
        if (id == undefined) {
          $(this).attr("id", "anc-" + no + "-" + index);
          base.append(
            '<div class="ancBtn"><a href="#anc-' +
              no +
              "-" +
              index +
              '" class="anc"><span></span>' +
              nakami +
              "</a></div>",
          );
        } else {
          base.append(
            '<div class="ancBtn"><a href="#' +
              id +
              '" class="anc"><span></span>' +
              nakami +
              "</a></div>",
          );
        }
      });
    } else {
      base.hide();
    }
  }

  ancLinks.each(function (i, elem) {
    if ($(elem).attr("area") === undefined) {
      // console.log('area属性なし');
      autoAnc($(elem), area, i);
    } else {
      let hani = $(elem).attr("area");
      // console.log(i + '：area属性:' + hani);
      autoAnc($(elem), $("." + hani), i);
    }
  });
})(jQuery);

// ----------------------------------------------------------------
// オリジナル
// ----------------------------------------------------------------
// (function ($) {
//     const ancLinks = $('#ancLinks .inner');
//     const tobisaki = $('.ancLink');
//     if (tobisaki.length) {
//         ancLinks.show();
//         // ancLinks.html('<ul></ul>');
//         $('.ancLink').each(function (index) {
//             const id = $(this).attr('id');
//             console.log('id:' + id);
//             const nakami = $(this).text();
//             console.log('nakami:' + nakami);

//             if (id == undefined) {
//                 $(this).attr('id', 'anc-' + index);
//                 ancLinks.append('<div class="ancBtn"><a href="#anc-' + index + '" class="anc">' + nakami + '</a></div>');
//             } else {
//                 ancLinks.append('<div class="ancBtn"><a href="#' + id + '" class="anc">' + nakami + '</a></div>');
//             }
//         });
//     } else {
//         ancLinks.hide();
//     }
// })(jQuery);
