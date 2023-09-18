
var menu = document.querySelector('#menu');
var main = document.querySelector('#main');

var a = 0;
menu.addEventListener('click', function(){
    if(a == 0){
        main.style.transform = 'scale(.8)';
        main.style.borderRadius = '10px';
        main.style.boxShadow = '0 150px 45px -100px rgba(0,0,0,0.2)';
        a = 1;
    }
    else{
        main.style.transform = 'scale(1)'; 
        main.style.borderRadius = '0';
        a = 0
    }
  
})

var tl = gsap.timeline()
 tl.from("#nav",{
    opacity: 0,
    y : 20,
    duration: 1,
    delay: 1
})
tl.from("#left1",{
    opacity: 0,
    y : 50,
    duration: 1,
    delay: 1
})

tl.from("#right1",{
    opacity: 0,
    scale: .5,
    duration: 1,
    delay: "-1"
})
tl.from("#section1",{
    opacity: 0,
    y: 50,
    duration: 1,
    delay: "-1"
})

