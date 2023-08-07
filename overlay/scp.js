'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnshowmodel = document.querySelectorAll('.show-modal');
const btnclosemodel = document.querySelector('.close-modal');
// console.log(btnshowmodel);

for (let i = 0; i < btnshowmodel.length;i++)
btnshowmodel[i].addEventListener('click',function(){
    console.log(btnshowmodel);
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

//close model function
function closeModel(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnclosemodel.addEventListener('click',closeModel); 
overlay.addEventListener('click',closeModel);
document.addEventListener('keydown',closeModel);

