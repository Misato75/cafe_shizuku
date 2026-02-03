"use strict";

// /*---------- スライドショー ----------*/

document.addEventListener("DOMContentLoaded", function () {
  const slideshow = new Swiper(".js_slideshow", {
    speed: 1200,
    effect: "fade",
    slidesPerView: 1,
    autoplay: {
      delay: 1600,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        // 画面幅768px以上（タブレット・PCサイズ）
        slidesPerView: 1,
        effect: "fade", // フェードで切り替える
      },
      0: {
        // 画面幅0px以上（スマホサイズ）
        slidesPerView: 1,
        effect: "fade",
      },
    },
  });
});

//存在しない要素を取得しようとするときに出るエラーを非表示にする
gsap.config({
  nullTargetWarn: false,
});

/*---------- ハンバーガーメニュー ----------*/
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");
});
// 追加コード
document.querySelectorAll(".l_header-nav_link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    navigation.classList.remove("is-active");
    body.classList.remove("is-active");
  });
});

/*---------- オープニングアニメーション ----------*/

gsap
  .timeline()
  .from(".js_opening-txt", {
    duration: 3.5,
    autoAlpha: 1,
    y: 40,
  })
  .to(
    ".js_opening",
    {
      autoAlpha: 0,
      duration: 2.0,
    },
    "-=0.3"
  );
gsap
  .timeline()
  .from(".js_copy", {
    duration: 0.6,
    autoAlpha: 0,
    x: -100,
  })

  .from(".js_sub-copy", {
    duration: 0.6,
    autoAlpha: 0,
    x: -100,
  });

/*---------- セクションタイトル ----------*/

const items = document.querySelectorAll(".js_section_title");

items.forEach((item) => {
  gsap.from(item, {
    y: 50,
    autoAlpha: 0,
    ease: "Power4.inout",
    duration: 1,
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
    },
  });
});

/*news*/
gsap.from(".js_news", {
  y: 100,
  autoAlpha: 0,
  duration: 1,
  ease: "Power4.inOut",
  scrollTrigger: {
    trigger: ".js_news-trigger",
    start: "top center",
  },
  stagger: {
    each: 0.6,
    from: "start",
  },
});

/*contact*/

gsap.from(".js_contact", {
  y: 50,
  autoAlpha: 0,
  duration: 1,
  ease: "Power4.inOut",
  scrollTrigger: {
    trigger: ".js_contact-trigger",
    start: "top center",
  },
  stagger: {
    each: 0.3,
    from: "start",
  },
});

/*---------- GSAP 設定 ----------*/
gsap.from(".js_menu_item", {
  autoAlpha: 0,
  ease: "Power4.inOut",
  duration: 1.0,
  y: 200,
  scrollTrigger: {
    trigger: ".js_menu-trigger",
    start: "top center",
    markers: false,
  },
});

gsap.from(".js_menu_lunch-item", {
  autoAlpha: 0,
  ease: "Power4.inOut",
  duration: 1.0,
  y: 200,
  scrollTrigger: {
    trigger: ".js_menu-lunch-trigger",
    start: "top center",
    markers: false,
  },
});

gsap.from(".js_menu_sweet-item", {
  autoAlpha: 0,
  ease: "Power4.inOut",
  duration: 1.0,
  y: 200,
  scrollTrigger: {
    trigger: ".js_menu-sweet-trigger",
    start: "top center",
    markers: false,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  const items = document.querySelectorAll(".menu_seasonal-item");
  items.forEach((item, index) => {
    const img = item.querySelector(".menu_seasonal-img");
    const text = item.querySelector(".menu_seasonal-type");

    ScrollTrigger.create({
      trigger: item,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          img,
          0.8,
          {
            y: 200,
            opacity: 0,
            delay: index * 0.3,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
          }
        );

        // テキストのアニメーション
        gsap.fromTo(
          text,
          {
            x: 30,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.2 + 0.2, // 画像より少し遅らせる
          }
        );
      },
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const items = document.querySelectorAll(".menu_seasonal-item");

  items.forEach((item) => {
    const img = item.querySelector(".menu_seasonal-img");
    const text = item.querySelector(".menu_seasonal-type");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        once: true,
      },
    });

    tl.from(img, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    }).from(
      text,
      {
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4"
    ); // 画像の少し後にテキスト
  });
});

/*---------- コンセプトセクション ----------*/
gsap.from(".js_concept-txt", {
  scrollTrigger: {
    trigger: ".js_problem-trigger",
    start: "top center",
  },
  duration: 1.5,
  y: 15, // 少し上に移動させる
  opacity: 0,
  ease: "power2.out",
  // 複数要素を扱うプロパティ
  stagger: {
    from: "top", //左側から
    amount: 1.2, // 0.8秒おきに
  },
});
gsap.from(".js_h-slide01", {
  scrollTrigger: {
    trigger: ".js_concept-trigger01",
    start: "top center",
  },
  duration: 1.5,
  x: 15, // 少し上に移動させる
  opacity: 0,
  ease: "power2.out",
  // 複数要素を扱うプロパティ
  stagger: {
    from: "start", //左側から
    amount: 0.7, // 0.8秒おきに
  },
});
gsap.from(".js_h-slide02", {
  scrollTrigger: {
    trigger: ".js_concept-trigger02",
    start: "top center",
  },
  duration: 1.5,
  x: -15, // 少し上に移動させる
  opacity: 0,
  ease: "power2.out",
  // 複数要素を扱うプロパティ
  stagger: {
    from: "right", //左側から
    amount: 0.7, // 0.8秒おきに
  },
});

/* --footer--クリックすると画面いっぱいに文字が広がる*/
const links = document.querySelectorAll(".footer-nav-link");
const overlay = document.getElementById("overlay");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const text = link.getAttribute("data-text");
    const href = link.getAttribute("href");

    overlay.textContent = text;
    overlay.classList.add("active");

    // まずoverlayを表示して、一定時間待ってから動かす
    setTimeout(() => {
      if (href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
        // スクロールのときはすぐoverlayを消す
        overlay.classList.remove("active");
      } else if (href.includes(".html")) {
        // ページ遷移の場合は、まずoverlayをフェードアウトしてから移動
        overlay.classList.remove("active");

        // 少し待ってから遷移
        setTimeout(() => {
          window.location.href = href;
        }, 200); // overlayが消えるアニメーション用の待ち時間
      } else {
        window.location.href = href;
      }
    }, 200); // 最初にoverlayを表示してから800ms待つ
  });
});
