var swiper = new Swiper(".season .slider_w", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
      el: ".pager ul span",
      type: "fraction",
  },
  navigation: {
      nextEl: ".slider_w .arrow .next a",
      prevEl: ".slider_w .arrow .prev a",
  },
});

var mn_swiper = new Swiper(".mn_slider", {
  type: "fraction",
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  // centeredSlides: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
  pagination: {
      el: ".slider_w .pager2 .num",
      type: "fraction",
  },
  navigation: {
      nextEl: ".pager2 .next2 a",
      prevEl: ".pager2 .prev2 a",
  }
});
mn_swiper.on('slideChange', function () {
  $(".slider").mousemove(function(e){
      let x = e.originalEvent.clientX - $(this).offset().left;
      if(e.target.parentElement.parentElement.classList.contains('swiper-slide-active') && x < 534){
          $("div.cur").css({'left':x,'top':e.originalEvent.layerY, 'z-index': 15});
      }
  });
});