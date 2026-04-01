// -------------------------------
// 汎用function集
// -------------------------------
(function ($) {
  /**
   * Htmlタグを除去
   * @param {string} str Htmlタグが含まれた文字列(<h1>サンプル文字列</h1>)
   * @returns {string} Htmlタグ除去された文字列(サンプル文字列)
   */
  // const removeHtmlTag = function (str) {
  //     return String(str).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');
  // };
  // window.removeHtmlTag = removeHtmlTag;

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  /**
   * スクロールストップスイッチ
   * @param  {bool} ON/OFF。
   * @returns {bool} false
   */
  const scrollStop = function (flag) {
    if (flag) {
      if ($("body").css("position") === "fixed") return;
      var scrTop = $(window).scrollTop();
      $("body")
        .css({ position: "fixed", top: -scrTop, left: "0", width: "100vw" })
        .data("scrTop", scrTop);
      // console.log('scr-stop!');
    } else {
      if ($("body").css("position") !== "fixed") return;
      var scrTop = $("body")
        .css({ position: "", top: "", left: "", width: "" })
        .data("scrTop");
      $(window).scrollTop(scrTop);
      // console.log('scr-active!');
    }
    return false;
  };
  window.scrollStop = scrollStop;

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  /**
   * URLをパースしてGET値のオブジェクトにする
   * @returns {{}} GET値のオブジェクトです。
   */
  const purseQuery = function () {
    const result = {};
    const query = decodeURIComponent(location.search);
    const query_ary = query.substring(1).split("&");
    // console.log(query_ary);
    for (var i = 0, len = query_ary.length; i < len; ++i) {
      var item = query_ary[i];
      let match_index = item.search(/=/);
      let key = "";
      if (match_index !== -1) {
        key = item.slice(0, match_index);
      }
      let value = item.slice(item.indexOf("=", 0) + 1);
      if (key !== "") {
        result[key] = value;
      }
    }
    return result;
  };
  window.purseQuery = purseQuery;

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  /**
   * 全角英数を半角英数にする
   * @param {string} str 全角英数(ａｂｃ１２３)
   * @returns {string} 半角英数(abc123)
   */
  const convertHalfWidth = function (str) {
    // return String(str).replace(/[Ａ-Ｚａ-ｚ０-９]/g, e => {
    //     return String.fromCharCode(e.charCodeAt(0) - 0xFEE0);
    // });
    return String(str).replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (e) {
      return String.fromCharCode(e.charCodeAt(0) - 0xfee0);
    });
  };
  window.convertHalfWidth = convertHalfWidth;

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  /**
   * 数値文字列にカンマ区切りにする
   * @param  {string} numberString 数値文字列。
   * @returns {string} カンマ区切りの数値文字列
   */
  const insertCommaDelimiter = function (numberString) {
    return String(numberString).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  window.insertCommaDelimiter = insertCommaDelimiter;

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  /**
   * カンマ区切りの数値文字列を数値にする
   * @param  {string} numberString 数値文字列。
   * @returns {number} カンマを取り除いた数値
   */
  const removeCommaDelimiter = function (numberString) {
    return Number(numberString.replace(/,/g, ""));
  };
  window.removeCommaDelimiter = removeCommaDelimiter;

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  /**
   * 数値のゼロパディング
   * @param  {number,number} keta 何桁にするか, num 対象の数値。
   * @returns {string} ゼロ埋めしたあとの数値文字列
   */
  const zeroPadding = function (num, length) {
    for (let index = 0; index < length; index++) {
      num = "0" + num;
    }
    return String(num).slice(-1 * length);
  };
  window.zeroPadding = zeroPadding;

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  /**
   * 日付情報をオブジェクトで返す
   * @returns {{}}
   */
  const getDateTimeObject = function (time) {
    const result = {};
    var now;
    if (time != undefined) {
      now = new Date(time);
    } else {
      now = new Date();
    }

    var xy = now.getFullYear();
    var xm = now.getMonth() + 1;
    var xd = now.getDate();
    var xw = now.getDay();
    var xwd = ["日", "月", "火", "水", "木", "金", "土"];
    var xh = now.getHours();
    var xmi = now.getMinutes();
    var xs = now.getSeconds();
    var unix_m = now.getTime(); //unixタイム（ミリ秒単位）
    var unix = Math.floor(unix_m / 1000); //unixタイム秒単位

    result["y"] = xy;
    result["m"] = xm;
    result["d"] = xd;
    result["w"] = xwd[xw];
    result["h"] = xh;
    result["mi"] = xmi;
    result["s"] = xs;
    result["unix_m"] = unix_m;
    result["unix"] = unix;

    return result;
  };
  window.getDateTimeObject = getDateTimeObject;

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  /**
   * NEWマーク期間内か判断
   * @param  {str,number} date 記事の公開日時, kikan 何日間か
   * @returns {bool} 期間ないか否か
   */
  const newMarkBool = function (date, kikan) {
    var nowdate = new Date();
    var nowUnix = Math.floor(nowdate.getTime() / 1000);
    var kijidate = new Date(date);
    var kijiUnix = Math.floor(kijidate.getTime() / 1000);
    var kikan_U = kikan * 24 * 60 * 60;
    if (nowUnix - kijiUnix <= kikan_U) {
      return true;
    } else {
      return false;
    }
  };
  window.newMarkBool = newMarkBool;

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  /**
   * userAgentからブラウザ判定
   * @returns {string} ブラウザ名
   */
  const getBrowserName = function () {
    const ua = window.navigator.userAgent.toLowerCase();
    // console.log(ua);
    let name = "unknown";
    if (ua.indexOf("msie") !== -1) {
      const ver = window.navigator.appVersion.toLowerCase();
      if (ver.indexOf("msie 6.") !== -1) {
        name = "ie6";
      } else if (ver.indexOf("msie 7.") !== -1) {
        name = "ie7";
      } else if (ver.indexOf("msie 8.") !== -1) {
        name = "ie8";
      } else if (ver.indexOf("msie 9.") !== -1) {
        name = "ie9";
      } else if (ver.indexOf("msie 10.") !== -1) {
        name = "ie10";
      } else if (ver.indexOf("msie 11.") !== -1) {
        name = "ie11";
      } else {
        name = "ie";
      }
    } else if (ua.indexOf("trident/7") !== -1) {
      name = "ie11";
    } else if (ua.indexOf("edge") !== -1) {
      name = "edge";
    } else if (ua.indexOf("chrome") !== -1 && ua.indexOf("edge") === -1) {
      name = "chrome";
    } else if (ua.indexOf("safari") !== -1 && ua.indexOf("chrome") === -1) {
      name = "safari";
    } else if (ua.indexOf("opera") !== -1) {
      name = "opera";
    } else if (ua.indexOf("firefox") !== -1) {
      name = "firefox";
    }
    return name;
  };
  window.getBrowserName = getBrowserName;

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  /**
   *  ユーザーのデバイスを返す
   *
   *  @return     スマホ(sp)、タブレット(tab)、その他(other)
   *
   */
  const getDevice = function () {
    var ua = navigator.userAgent;
    if (
      ua.indexOf("iPhone") > 0 ||
      ua.indexOf("iPod") > 0 ||
      (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
    ) {
      return "sp";
    } else if (ua.indexOf("iPad") > 0 || ua.indexOf("Android") > 0) {
      return "tab";
    } else {
      return "other";
    }
  };
  window.getDevice = getDevice;

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  /**
   *  画面が指定幅以上か
   *  @param {number} num 指定幅ドット数
   *  @return {bool}
   */
  const screenWidthOver = function (num) {
    var w = $(window).width();
    if (w >= num) {
      // console.log('true');
      return true;
    } else {
      // console.log('false');
      return false;
    }
  };
  window.screenWidthOver = screenWidthOver;

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  /**
   *  このページにサイト内から来たのかサイト外から来たのか判定
   *  @return {bool}  true:サイト内 false:サイト外
   */
  const siteNaiKaraKitano = function () {
    var ref = document.referrer; // リファラ情報を得る
    var hereHost = window.location.hostname; // 現在ページのホスト(ドメイン)名を得る

    // ホスト名が含まれるか探す正規表現を作る(大文字・小文字を区別しない)
    var sStr = "^https?://" + hereHost;
    var rExp = new RegExp(sStr, "i");

    // リファラ文字列を判別
    if (ref.length == 0) {
      // リファラなしの場合
      // alert("リファラ情報がありません");
      return false;
    } else if (ref.match(rExp)) {
      // マッチした場合＝アクセス元が自サイト内の場合
      // alert("自サイト内から来ました");
      return true;
    } else {
      // マッチしない場合＝アクセス元がサイト外の場合
      // alert("他のサイトから訪れました");
      return false;
    }
  };
  window.siteNaiKaraKitano = siteNaiKaraKitano;

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  /**
   *  ターゲットが画面内に入るとクラスを付与
   *  @param {object} t ターゲット要素
   *  @param {text} c 追加クラス名
   *  @param {num} s 差分スクロール量
   *  @return {bool}
   */
  const frameInCheck = function (t, c, s) {
    var addClass = "active";
    var sabun = 0;
    if (c) {
      addClass = c;
    }
    if (s) {
      sabun = s;
    }
    if (t) {
      t.each(function () {
        //ターゲットの位置を取得
        var target = $(this).offset().top;
        //スクロール量を取得
        var scroll = $(window).scrollTop();
        //ウィンドウの高さを取得
        var height = $(window).height();
        //ターゲットまでスクロールするとフェードインする
        if (scroll > target - height + sabun) {
          var delay = 0;
          if ($(this).attr("delay")) {
            delay = Number($(this).attr("delay"));
          }
          // console.log(delay);
          //クラスを付与
          $(this)
            .delay(delay)
            .queue(function () {
              $(this).addClass(addClass);
            });
        }
      });
    } else {
      console.log("ターゲット指定なしなので無視");
    }
  };
  window.frameInCheck = frameInCheck;

  // ----------------------------------------------------------------
  // ----------------------------------------------------------------

  /*
   * jQuery Highlight plugin
   *
   * Based on highlight v3 by Johann Burkard
   * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
   *
   * Code a little bit refactored and cleaned (in my humble opinion).
   * Most important changes:
   *  - has an option to highlight only entire words (wordsOnly - false by default),
   *  - has an option to be case sensitive (caseSensitive - false by default)
   *  - highlight element tag and class names can be specified in options
   *
   * Usage:
   *   // wrap every occurrance of text 'lorem' in content
   *   // with <span class='highlight'> (default options)
   *   $('#content').highlight('lorem');
   *
   *   // search for and highlight more terms at once
   *   // so you can save some time on traversing DOM
   *   $('#content').highlight(['lorem', 'ipsum']);
   *   $('#content').highlight('lorem ipsum');
   *
   *   // search only for entire word 'lorem'
   *   $('#content').highlight('lorem', { wordsOnly: true });
   *
   *   // don't ignore case during search of term 'lorem'
   *   $('#content').highlight('lorem', { caseSensitive: true });
   *
   *   // wrap every occurrance of term 'ipsum' in content
   *   // with <em class='important'>
   *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
   *
   *   // remove default highlight
   *   $('#content').unhighlight();
   *
   *   // remove custom highlight
   *   $('#content').unhighlight({ element: 'em', className: 'important' });
   *
   *
   * Copyright (c) 2009 Bartek Szopka
   *
   * Licensed under MIT license.
   *
   */

  jQuery.extend({
    highlight: function (node, re, nodeName, className) {
      if (node.nodeType === 3) {
        var match = node.data.match(re);
        if (match) {
          var highlight = document.createElement(nodeName || "span");
          highlight.className = className || "highlight";
          var wordNode = node.splitText(match.index);
          wordNode.splitText(match[0].length);
          var wordClone = wordNode.cloneNode(true);
          highlight.appendChild(wordClone);
          wordNode.parentNode.replaceChild(highlight, wordNode);
          return 1; //skip added node in parent
        }
      } else if (
        node.nodeType === 1 &&
        node.childNodes && // only element nodes that have children
        !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
        !(
          node.tagName === nodeName.toUpperCase() &&
          node.className === className
        )
      ) {
        // skip if already highlighted
        for (var i = 0; i < node.childNodes.length; i++) {
          i += jQuery.highlight(node.childNodes[i], re, nodeName, className);
        }
      }
      return 0;
    },
  });

  jQuery.fn.unhighlight = function (options) {
    var settings = { className: "highlight", element: "span" };
    jQuery.extend(settings, options);

    return this.find(settings.element + "." + settings.className)
      .each(function () {
        var parent = this.parentNode;
        parent.replaceChild(this.firstChild, this);
        parent.normalize();
      })
      .end();
  };

  jQuery.fn.highlight = function (words, options) {
    var settings = {
      className: "highlight",
      element: "span",
      caseSensitive: false,
      wordsOnly: false,
    };
    jQuery.extend(settings, options);

    if (words.constructor === String) {
      words = [words];
    }
    words = jQuery.grep(words, function (word, i) {
      return word != "";
    });
    words = jQuery.map(words, function (word, i) {
      return word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    });
    if (words.length == 0) {
      return this;
    }

    var flag = settings.caseSensitive ? "" : "i";
    var pattern = "(" + words.join("|") + ")";
    if (settings.wordsOnly) {
      pattern = "\\b" + pattern + "\\b";
    }
    var re = new RegExp(pattern, flag);

    return this.each(function () {
      jQuery.highlight(this, re, settings.element, settings.className);
    });
  };
})(jQuery);
