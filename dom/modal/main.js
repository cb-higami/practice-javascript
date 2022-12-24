'use strict'

const modal = document.getElementById('modal');
const show = document.getElementById('modal__show');
const close = document.getElementById('modal__close');
const backGroung = document.getElementById('modal__background');


show.addEventListener('click', () => {
    modal.classList.add('is-show');
    backGroung.classList.add('is-show');
})

close.addEventListener('click', () => {
    modal.classList.remove('is-show');
    backGroung.classList.remove('is-show');
})

backGroung.addEventListener('click', () => {
    close.click();
})