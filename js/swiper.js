let swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".bar",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

  let swiper1 = new Swiper(".slide_w", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".arrow .next",
      prevEl: ".arrow .prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 100,
        },
      },
  });

  