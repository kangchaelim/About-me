// D 움직이기
const D = document.querySelector('#D');
console.log(D);

window.addEventListener('load', ()=>{
    D.style.marginTop = '5vh';
});

// main text 동작
const typo = document.querySelectorAll('body .typo');
console.log(typo);
 
setInterval(()=>{
    typo[0].style.opacity = '0';
},650);

setInterval(()=>{
    typo[1].style.opacity = '0';
},1350);


setInterval(()=>{
    typo[2].classList.replace('opa-0', 'opa-1');
    typo[3].classList.replace('opa-0', 'opa-1');
},2700);

setInterval(()=>{
    typo[3].style.marginTop = '-5vh';
},3500);

// 가로 스크롤 값
window.addEventListener('scroll', ()=> {
    console.log(scrollX);

    if(scrollX >= 500){
        typo[0].style.opacity = '0';
        typo[1].style.opacity = '0';
        typo[2].style.opacity = '0';
        typo[3].style.opacity = '0';
    }else if (scrollX <= 500) {
        typo[2].style.opacity = '1';
        typo[3].style.opacity = '1';
    }
});
