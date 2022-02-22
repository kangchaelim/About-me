// whoAmI 'W' & number down
const down = document.querySelectorAll('.down')
console.log(down);

window.addEventListener('scroll', ()=>{
    console.log(scrollX);

    if(scrollX >= 1000){
        setInterval(()=>{
            down[0].style.marginTop = '5vh';
        }, 900);
    }
    if (scrollX >= 2000){
        setInterval(()=>{
            down[1].style.marginTop = '5vh';
        }, 900);
    }
    if (scrollX >= 4000){
        setInterval(()=>{
            down[2].style.marginTop = '5vh';
        }, 900);
    }
    if (scrollX >= 6000){
        setInterval(()=>{
            down[3].style.marginTop = '5vh';
        }, 900);
    }
    if (scrollX >= 8000){
        setInterval(()=>{
            down[4].style.marginTop = '5vh';
        }, 900);
    }
})