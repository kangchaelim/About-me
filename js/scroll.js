// main 효과
// .down 움직이기
const down = document.querySelector('.down');
const up = document.querySelectorAll('.up');
console.log(down);
console.log(up);

window.addEventListener('load', ()=>{
    down.style.marginTop = '7vh';
});

const typo = document.querySelectorAll('body .typo');
console.log(typo);
 
setInterval(()=>{
    typo[0].style.opacity = '0';
},700);

setInterval(()=>{
    typo[1].classList.replace('opa-0', 'opa-1');
},1500);

setInterval(()=>{
    up[0].style.marginTop = '0';
    up[1].style.marginTop = '0';
},2800)


// cont
const cont_1 = document.getElementById('cont_1');
const cont_2 = document.getElementById('cont_2');

cont_1.addEventListener('wheel',function(e){
    e.preventDefault;
    if(e.deltaY > 0){
        cont_2.style.top = `0%`;
    }
});

cont_2.addEventListener('wheel',function(e){
    e.preventDefault;
    if(e.deltaY < 0 && s_pos >= 0){
        setTimeout(()=>{
            cont_2.style.top = `100%`;
        },500);
        return;
    }
    move_slider(e.deltaY);
});

// content a,b,c,d down
const contentTxt = document.querySelectorAll('#content span');
console.log(contentTxt);
const content = document.querySelectorAll('#content li');
console.log(content);

for(let i = 0; i < content.length ; i++){
    content[i].addEventListener('mouseenter', function(){
        contentTxt[i].style.top = '-7vh';
    });
}

for(let i = 0; i < content.length ; i++){
    content[i].addEventListener('mouseleave', function(){
        contentTxt[i].style.top = '0';
    });
}

// modal창 event
const closeBtn = document.querySelectorAll('.modal button');
console.log(closeBtn);
const modal = document.querySelectorAll('.modal');
console.log(modal);

for(let k = 0; k < closeBtn.length ; k++){
        content[k].addEventListener('click', ()=>{
        modal[k].classList.replace('top-100', 'top-0');
    });
        closeBtn[k].addEventListener('click', ()=>{
        modal[k].classList.replace('top-0', 'top-100')
    });
}

// slider
const slider = document.getElementById('slider');
const s_wid = slider.offsetWidth;
let win_wid = window.innerWidth;
let s_move_max = (s_wid - (win_wid/2)) * -1;
let s_pos = 0;

function move_slider(amount){
    s_pos -= amount;
    if(s_pos < s_move_max){
        s_pos = s_move_max;
        return;
    }else if(s_pos > 0){
        s_pos = 0;
        return;
    }
    slider.style.transform = `translateX(${s_pos}px)`;  
}

