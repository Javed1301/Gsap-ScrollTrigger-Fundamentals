
/*

//defnation of gsap what does it mean?
gsap.to("#box1",{
    x:1000 ,//moved the box along x-axis 1000 unit
    duration: 2, // it will take 2 sec to move
    delay:2, //it will have a delay of 2 sec before moving started
})
gsap.to("#box2",{
    // x:-200, //move - 200 in negative direction
    x:800,    //this eill make a motion of a slope with gradienty/x
    y:600,
    duration:2,
    delay:1,
})

*/
/*



//move a block from initial to final with animation
gsap.to("#box1",{
    x:1000 ,
    y:1000,
    duration: 2, 
    delay:2, 
})

//move a block from final to initial with animation
gsap.from("#box2",{
    x:1000 ,
    y:1000,
    duration: 2, 
    delay:2, 
})

*/

/*
//How to use Css property in this
gsap.to("#box1",{
    x:1000 ,
    
    duration: 2, 
    delay:1,
    backgroundColor:"blue",
    rotate:360,
    borderRadius:"50%",
    scale:0.5, 
})
*/
/*
gsap.to("h1",{
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:1  //it is used to apply the animation one by one on each (+ and -) specify the direction of saggering which come first top or bottom
    //value of stagger represent additional increase in duration.

})

*/

gsap.from("#box2",{
    x:1000 ,
    
    duration: 2, 
    delay:1,
    rotate:360,
    repeat:-1, //-1 is used for repeating the animation infinitely. we can also give a positive value 'x'->it will repeat the animation x+1 times
    yoyo:true, //it will create a yoyo type to and fro effect.
})

    
