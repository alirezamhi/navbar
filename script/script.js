let fullpage = document.querySelector('.fullpage');
let icon = document.querySelector('.icon');
icon.addEventListener('click' , function(){
    fullpage.classList.toggle('active'); 
    icon.classList.toggle('active');
});