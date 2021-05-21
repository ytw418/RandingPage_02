// 스와퍼 슬라이드
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
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
    top:800,
    
    },1000,function(){
    $('.sec6_img3').animate({
    top:900,
    
    },1000,ccc);
    });
    });