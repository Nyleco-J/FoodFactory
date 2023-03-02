const btnShow = document.querySelector('.btn__show');
const body = document.querySelector('body');
const btnBack = document.querySelector('.btn__back');

if(btnShow){
    btnShow.addEventListener('click', () =>{
        body.classList.add('show');
    })
}
if(btnBack){
    btnBack.addEventListener('click', () =>{
        body.classList.remove('show');
    })
}