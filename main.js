// 스와퍼 슬라이드
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
 
  });
  $(function ccc(){
    $('.sec6_img3').animate({
    top:830,
    // 내려갈떄
    },600,function(){
    $('.sec6_img3').animate({
    top:780,
    // 올라갈떄
    },400,ccc);
    });
    });