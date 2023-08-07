'use strict';
const bulb = document.querySelector('.bulb');
const bulb1 = document.querySelector('.bulb1');
const btn = document.querySelector('.on');
const btn1 = document.querySelector('.on1');let a = 1;
btn.addEventListener('click', function(){ 
    if(a === 1){
        bulb.classList.remove('hidden');
        bulb1.classList.add('hidden');
}});
btn1.addEventListener('click', function(){ 
    if(a === 1){
        bulb1.classList.remove('hidden');
        bulb.classList.add('hidden');
}})


