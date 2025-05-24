function breakTheText(){
    var h1 = document.querySelector("h1")

    var h1Text = h1.textContent

    var splittedLetters = h1Text.split("")
    var clutter = ""
    var midVal = Math.floor(splittedLetters.length/2)
    splittedLetters.forEach(function(elem,idx){
        if(idx<midVal){
            clutter += `<span class ="left">${elem}</span>`;
        }else{
            clutter += `<span class="right">${elem}</span>`;
        }
    })

    h1.innerHTML = clutter
}

breakTheText()


gsap.from("h1 .left",{
    y:50,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.15,
    // ease: "elastic.out(1,0.5)",
})

gsap.from("h1 .right",{
    y:50,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:-0.15
})