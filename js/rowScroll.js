// 가로스크롤
const container = document.getElementById('container');
console.log(container);
console.dir(container);

const windowWidth = window.innerWidth;
console.log(windowWidth);

let eventHandle = 0;
window.addEventListener('wheel', (event) => {
    console.log(event.deltaY);
    if(event.deltaY > 0) {
        console.log('plus')

        eventHandle++;

        console.log(eventHandle);

        window.scrollTo({
            left: windowWidth * eventHandle,
            behavior : "smooth"
        });
    }else {
        console.log('minus');
        eventHandle--;
        console.log(eventHandle);

        window.scrollTo({
            left : windowWidth * eventHandle,
            behavior : 'smooth'
        });
    }
    if (eventHandle < 0) {
        eventHandle = 0;
        console.log('minimum');
    }
    if (eventHandle > 6){
        eventHandle = 6;
        console.log('maxium');
    }
});

  