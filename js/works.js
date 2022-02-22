// works img hover시 확대
const content = document.querySelectorAll('.content');
console.log(content);
const works = document.querySelectorAll('.works img');
console.log(works);

for(let k = 0; k < works.length ; k++){
    content[k].addEventListener('mouseenter', function(){
      works[k].classList.replace('opa-0', 'opa-1');
    });
  }

  for(let k = 0; k < works.length ; k++){
    content[k].addEventListener('mouseleave', function(){
      works[k].classList.replace('opa-1', 'opa-0');
    });
  }