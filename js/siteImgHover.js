// site img hover 시 아이콘과 검정투명박스 등장
const cover = document.querySelectorAll('body .cover');
const icon = document.querySelectorAll('body .img .icon');
const siteImg = document.querySelectorAll('body .img');
console.log(icon);

for(let i = 0; i < siteImg.length; i++){
    siteImg[i].addEventListener('mouseenter', function(){
      icon[i].classList.replace('opa-0','opa-1');
      cover[i].classList.replace('opa-0', 'opa-1');
    });
  }
  
for(let i = 0; i < siteImg.length; i++){
  siteImg[i].addEventListener('mouseleave', function(){
    icon[i].classList.replace('opa-1','opa-0');
    cover[i].classList.replace('opa-1', 'opa-0');
  }); 
}
// icon 안먹어서 다른 방법으로..