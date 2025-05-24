var tl = gsap.timeline();
var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")
tl.to("#full",{
    right:0,
    doration:1,

})

tl.from("#full h4",{
    x:150,
    duration:0.6,
    opacity:0,
    stagger:0.2
})

tl.from("#full i",{
    opacity:0,
    x:20,
    doration:0.6
})

tl.pause();
menu.addEventListener("click",function(){
    tl.play();
})

cross.addEventListener("click",function(){
    tl.reverse();
})