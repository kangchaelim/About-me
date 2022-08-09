// nav
$(function (){
    $(document).scroll(function(){
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height())
    })
})

// 눈송이 만들기
function createCircle(){
    const aboutSection = document.querySelector('body .introduce');
    const circle = document.createElement('span');
    
    let size = Math.random() * 40;
    
    circle.style.width = 2 + size + 'px';
    circle.style.height = 2 + size + 'px';
    circle.style.borderRadius = 50 + 'px';


    circle.style.top = Math.random() * innerHeight + 'px';
    circle.style.left = Math.random() * innerWidth + 'px';

    aboutSection.appendChild(circle);

    setTimeout(()=>{
        circle.remove()
    }, 5000);
}

setInterval(createCircle, 150);

// main
// 책 이미지 height 효과
const bookHeight = document.querySelectorAll('body .bookHeight');
console.log(bookHeight);

window.addEventListener('load', ()=>{
        for(let i = 0; i < bookHeight.length ; i++){
            bookHeight[i].style.height = '100%';
            }
    // for(let i = 0; i < bookHeight.length ; i++){
    //     bookHeight[i].style.transform = 'rotate(-180deg)';
    //     }   
})

// 스크롤 솨라락
// 스크롤 시 aboutTxt 등장
const aboutTxt = document.querySelector('body .aboutTxt');

window.addEventListener('scroll', ()=>{
    if(scrollY > 500){
        aboutTxt.style.opacity = '1';
        aboutTxt.style.marginTop = '0';
    }
}); 

// section2
// selectionTitle 왼 -> 오 
const selectionTitle = document.querySelector('.selectionTitle');
console.log(selectionTitle);

window.addEventListener('scroll', ()=>{
    if(scrollY >= 1200){
        setInterval(()=>{
            selectionTitle.style.opacity = '1';
            selectionTitle.style.marginLeft = '25vw';
        }, 100);
    }
});

// section3 
// 책 이미지 height 효과 & record animate
const bookLeft = document.querySelector('body .book-left');
const bookRight = document.querySelector('body .book-right');
const record = document.querySelector('body .record');

window.addEventListener('scroll', ()=>{
    if(scrollY >= 1900){
        setInterval(()=>{
            bookLeft.style.height = '100%';
            bookRight.style.height = '100%';
        }, 1000);
        // record.animate(
        //     [
        //        {transform: 'rotate(0)'},
        //        {transform: 'rotate(-5deg)'},
        //        {transform: 'rotate(0)'},
        //      ],
        //     {
        //        duration :1000,
        //      });
    }
});

// section4
// sticker2 animate
const stickerTwo = document.querySelector('body .sticker2');

window.addEventListener('scroll', ()=>{
    if(scrollY >= 2000){
        stickerTwo.animate(
            [
               {transform: 'rotate(0)'},
               {transform: 'rotate(-10deg)'},
               {transform: 'rotate(0)'},
             ],
            {
               duration :1000,
             }); 
    }
});

// scroll 시 exhibitionTxt 등장
const exhibitionTxt = document.querySelector('body .exhibitionTxt');

window.addEventListener('scroll', ()=>{
  if(scrollY > 2700){
    exhibitionTxt.style.opacity = '1';
    exhibitionTxt.style.marginTop = '0';
  }
}); 