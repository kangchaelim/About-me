// mainImg 효과
const designer = document.querySelector('.designer');
const chairs = document.querySelector('.chairs');

setInterval(()=>{
  designer.style.opacity = '0';
  chairs.style.opacity = '1';
}, 3000);
 
// mainTxt 효과 & 동그라미 버튼 
window.onload = function(){

let title = document.querySelector('.title');
for(let k=0; k < title.querySelectorAll('div').length; k++){
      
  let text = title.querySelectorAll('div')[k];

      TweenMax.from( text , 2, {
      autoAlpha: 0,
      delay : Math.random()*1.5,
      ease: Power3.easeInOut 
  })
};

let section = document.getElementsByTagName("section");
let pointBtn = document.querySelectorAll(".pointWrap li");
let pageNum = 0;
let totalNum = section.length
for( let i = 0; i < pointBtn.length; i++){
      (function(idx) {
          pointBtn[idx].onclick = function() {
              pageNum = idx;
              pageChangeFunc();
              window.scrollTo({
                top: section[pageNum].offsetTop,
                behavior: 'smooth',
              })
          }
      })(i);
}

//스크롤 이벤트
window.addEventListener("scroll", function(event){
let scroll = this.scrollY
for(let i=0; i < totalNum; i++){
      if(scroll > section[i].offsetTop - window.outerHeight/1.5  && scroll < section[i].offsetTop - window.outerHeight/1.5 + section[i].offsetHeight){
        pageNum = i;
        break;
      }
    }
    pageChangeFunc();
  });

//페이지 변경
function pageChangeFunc(){
  for(let i=0; i<totalNum; i++){
    section[i].classList.remove("active");
    // section[i].className = "";
    pointBtn[i].classList.remove("active");
  }
  section[pageNum].classList.add("active");
  pointBtn[pageNum].classList.add("active");
}

//페이지 로드되면 바로 실행
  pageChangeFunc();
}

// .bestItem 스크롤
const bestItem = document.querySelector('body .bestItem');
console.log(bestItem);

window.addEventListener('scroll', ()=>{
  console.log(scrollY);

  if(scrollY >= 1500){
    bestItem.classList.replace('opa-0', 'opa-1');
  }else if(scrollY <= 1500){
    bestItem.classList.replace('opa-1', 'opa-0');
  }
  if(scrollY >= 3900){
    bestItem.classList.replace('opa-1', 'opa-0');
  }
});
