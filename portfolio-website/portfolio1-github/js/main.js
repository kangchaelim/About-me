// 1. 스크롤애니메이션
$(function(){
    $('.animate').scrolla({
        mobile: true,  //모바일버전시 활성화
        once: false // 스크롤시 딱 한번만 하고 싶을 땐 true
    });
 });

// 2. 글자애니메이션  Splitting 데모사이트 그대로 작성 따라하기
$(function(){
    Splitting();
});

// 3. slick 슬라이드
$(function(){
    $('.slide').slick({
        arrows:true,
        dots:false,
        autoplay:true,
        infinite:true,
        slidesToShow:2,
        slidesToScroll:1,
        autoplaySpeed:5000,
        pauseOnHover:true,
        pauseOnFoucus:true
    });
});

// 4.배경색 변경
$(window).on('scroll resize', function(){
    var scrollTop = $(document).scrollTop();
    bgColor();
    function bgColor(){
        if(scrollTop > 3200){
            $('body').addClass('on');
        }else {
            $('body').removeClass('on');
        }
        if(scrollTop > 4800){
            $('body').removeClass('on');
        }
    }
});

// smile 애니
const smileL = document.querySelector('#smileL');
console.log(smileL);
const smileM = document.querySelector('#smileM');
console.log(smileM);
const smileS = document.querySelector('#smileS');
console.log(smileS);

smileL.animate(
  [
     {transform: 'rotate(0deg)'},
     {transform: 'rotate(20deg)'},
     {transform: 'rotate(0deg)'},
     {transform: 'rotate(-20deg)'},
     {transform: 'rotate(0deg)'}
  ],
  {
      duration :2000,
      iterations : Infinity
  });

  smileM.animate(
    [
       {transform: 'rotate(0deg)'},
       {transform: 'rotate(-20deg)'},
       {transform: 'rotate(0deg)'},
       {transform: 'rotate(20deg)'},
       {transform: 'rotate(0deg)'}
    ],
    {
        duration :2000,
        iterations : Infinity
    });
  smileS.animate(
  [
     {transform: 'rotate(0deg)'},
     {transform: 'rotate(20deg)'},
     {transform: 'rotate(0deg)'},
     {transform: 'rotate(-20deg)'},
     {transform: 'rotate(0deg)'}
  ],
  {
      duration :2000,
      iterations : Infinity
  });

// 5. 메뉴
$(function(){
    $('.menuOpen button.open').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuOpen .menuWrap').removeClass('on');
    });
});