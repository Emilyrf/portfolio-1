let imagens = document.querySelectorAll('.project-img');
let modal = document.querySelector('.modal');
let modalImg = document.getElementById("modal_img")
let btClose = document.querySelector('#bt_close');
let srcVal ="";

for (let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click', function(){ 

        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
}

btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});