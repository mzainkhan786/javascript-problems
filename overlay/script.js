'use strict';
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnshowmodel = document.querySelectorAll('.show-modal');
const btnclosemodel = document.querySelector('.close-modal');

for (let i = 0; i < btnshowmodel.length;i++)
btnshowmodel[i].addEventListener('click', function(){
    model.classList.remove('hidden')
    overlay.classList.remove('hidden')

})
function closemodel(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}
overlay.addEventListener('click', function(){ console.log(closemodel());})
btnclosemodel.addEventListener('click', function(){ console.log(closemodel());})

document.addEventListener('keydown',function(d){ 
 if(d.key === 'Escape'){
   
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}
});