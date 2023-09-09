var slides=document.querySelectorAll('.slide');
var btns=document.querySelectorAll('.slide-btn');
let currentSlide=1

var manualNav=function(manual){
    slides.forEach((slide)=>{
         slide.classList.remove('active-slide');

         btns.forEach((btn)=>{
            btn.classList.remove('active-slide');
         });
    });

    slides[manual].classList.add('active-slide');
    btns[manual].classList.add('active-slide');
}


btns.forEach((btn, i)=>{
  btn.addEventListener("click", ()=>{
    manualNav(i);
    currentSlide=i;
  });
});


var repeat=function(activeClass){
    let active=document.getElementsByClassName('active-slide');
    let i=1;

    var repeater=()=>{
        setTimeout(function(){
[...active].forEach((activeSlide)=>{
    activeSlide.classList.remove('active-slide'); 
})

            slides[i].classList.add('active-slide');
            btns[i].classList.add('active-slide');
            i++;

            if(slides.length==i){
                i=0;
            }

            if(i>=slides.length){
                return;
            }
            repeater();
        },7000);
    }
    repeater();
}

repeat();