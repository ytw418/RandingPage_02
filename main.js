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
