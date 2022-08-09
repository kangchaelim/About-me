// scroll 시 솨라락
const section = document.querySelectorAll('body > section');
console.log(section);
const pot = document.querySelectorAll('#brand>img');
console.log(pot);
const imgBox = document.querySelectorAll('#marbling-imgbox>div');
console.log(imgBox);

console.log(section[3].children[0]);
console.log(section[3].children[1]);

// const itemBox = document.querySelectorAll('#items > div');
// console.log(itemBox);

window.addEventListener('scroll', ()=>{
  console.log(scrollY);

  if(scrollY >= 250){
    section[0].style.opacity = 1;
    section[0].style.marginTop = '0';
    for(let i = 0; i < pot.length; i++){
      setInterval(()=>{
        pot[i].classList.replace('trans-scale-2', 'trans-scale-1');
        pot[i].classList.replace('opa-0', 'opa-1');
      }, (500) * (i+1));
    }
  }
  if(scrollY >= 1440){
    section[1].style.opacity = 1;
    section[1].style.marginTop = '0';
  }
  if(scrollY >= 2150){
    section[2].style.opacity = 1;
    section[2].style.marginTop = '0';
    for(let i = 0; i < imgBox.length; i++){
      setInterval(()=>{
        imgBox[i].classList.replace('opa-0', 'opa-1');
      }, (500) * (i+1));
    }
  }
  if(scrollY >= 2650){
    section[3].style.opacity = 1;
    section[3].style.marginTop = '-10vh';
    for(let i = 0; i < section[3].children.length; i++){
      setInterval(()=>{
        section[3].children[i].classList.replace('item', 'itemRe');
      }, (1000) * (i+1));
    }

    // section[3].children[0].classList.remove('item');
    // section[3].children[1].classList.remove('item');

    // for(let i = 0; i < imgBox.length; i++){
    //   setInterval(()=>{
    //     itemBox[i].classList.replace('opa-0', 'opa-1');
    //   }, (500) * (i+1));
    // }
  }
  if(scrollY >= 3800){
    section[4].style.opacity = 1;
    section[4].style.marginTop = '0';
  }
});

// plate에 호버 시 description & shop now 나오기
const button = document.querySelectorAll('body .button');
console.log(button);
const shopNow = document.querySelectorAll('body .shop-now');
console.log(shopNow);
const plateTxt = document.querySelectorAll('body .plateTxt');
console.log(plateTxt);

for(let k = 0; k<button.length ; k++){
    button[k].addEventListener('mouseenter', function(){
      plateTxt[k].classList.replace('opa-0','opa-1');
      shopNow[k].classList.replace('opa-0', 'opa-1')
    });
    
  }
  
  for(let k = 0; k<button.length ; k++){
    button[k].addEventListener('mouseleave', function(){
      plateTxt[k].classList.replace('opa-1', 'opa-0');
      shopNow[k].classList.replace('opa-1', 'opa-0')
    });
  }
  
//  anamelware circle 애니
const circle = document.querySelector('#circle');
console.log(circle);
const anamelwareTxt = document.querySelector('#anamelware-txt');
console.log(anamelwareTxt);

anamelwareTxt.addEventListener('mouseenter', ()=>{
  circle.animate(
    [
       {transform: 'rotate(0)'},
       {transform: 'rotate(360deg)'}
    ],
    {
        duration :20000
    });
});

// items circle 애니
const circleOne = document.querySelector('#circle1');
console.log(circleOne);

circleOne.animate(
    [
       {transform: 'rotate(0)'},
       {transform: 'rotate(360deg)'}
    ],
    {
        duration :20000,
        iterations : Infinity
    });

const circleTwo = document.querySelector('#circle2');
console.log(circleTwo);

circleTwo.animate(
    [
       {transform: 'rotate(0)'},
       {transform: 'rotate(360deg)'}
    ],
    {
        duration :20000,
        iterations : Infinity
    });
