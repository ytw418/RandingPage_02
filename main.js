// 스와퍼 슬라이드
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3500,
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



  // 인증서 스와퍼 슬라이드
var swiper = new Swiper(".inmySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
      rotate: 0, /*각도*/
      stretch: 40, /*간격*/ 
      depth: 10, /* 보이는 거리*/
      modifier: 0.6,
      slideShadows: true,
      slidesPerView: 3,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
  
});

  
  var downvw = parseInt($(window).width() * 0.45) + 'px';
  var upvw = parseInt($(window).width() * 0.41) + 'px';
  $(function ccc(){
    $('.sec6_img3').animate({
    top:downvw,
    // 내려갈떄
    },600,function(){
    $('.sec6_img3').animate({
    top:upvw,
    // 올라갈떄
    },400,ccc);
    });
    });

    $( document ).ready( function() {
      //jbOffset 에 #hd_wr의 좌표값 저장 
    var jbOffset = $( '#sec10' ).offset();
  
    $( window ).scroll( function() {
          //document가 jbOffset 값보다 많이 스크롤 되면 실행
      if ( $( document ).scrollTop() > jbOffset.top ) {
      
        $("#sec10 .sec10_img3").css("transition-duration", "3s");
      
      
      
      
        $("#sec10 .sec10_img3").css("width","42%");
        $("#sec10 .sec10_img3").css("height","5%");
      }
          //jbOffset 값 이하로 줄어들면 실행
      else {
        $( '#sec10' ).removeClass( 'fixed' );
        $("#sec10 .sec10_img3").css("width","0.1%");
      }
    });
  });

