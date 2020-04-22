const images = document.querySelectorAll('.box');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
const btn = document.querySelector('.heavy')

let slideIndex = 0;

function showSlide(){
     
    if(slideIndex > images.length - 1){
        slideIndex = 0
    }
    if(slideIndex < 0){
        slideIndex = images.length -1;
    }
     let i = 0;

     for(i = 0; i < images.length; i++){
         images[i].style.display = 'none'
     }
     images[slideIndex].style.display = 'block';
     for(i = 0; i < images.length; i++){
         dots[i].className = dots[i].className.replace('active', '');
     }
     dots[slideIndex].className += ' active'
}
    prev.addEventListener('click', () => {
        showSlide(slideIndex -= 1)
    })
    next.addEventListener('click', () => {
        showSlide(slideIndex += 1)
    })

    dots.forEach((item, index) => {
        item.addEventListener('click', () => {
            showSlide(slideIndex = index)
        })
    })
    btn.addEventListener('click', () => {
        const clickme = document.querySelector('.right')
        if(clickme.style.display === 'none'){
            clickme.style.display = 'block'
        } else{
            clickme.style.display = 'none'
        }
    })

showSlide()