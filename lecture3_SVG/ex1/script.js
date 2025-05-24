// Initial path of the SVG curve — both Path and finalPath are set to the same straight curve initially
var Path = `M 100 200 Q 700 200 1300 200`
var finalPath = `M 100 200 Q 700 200 1300 200`

// Selecting the div that wraps the SVG
var string = document.querySelector("#string")

// OPTIONAL: You could use these to test when the mouse enters or leaves the element
// string.addEventListener("mouseenter",function(){
//     console.log("entered")
// })

// string.addEventListener("mouseleave",function(){
//     console.log("leaved")
// })

// When the mouse moves within the #string element
string.addEventListener("mousemove", function(dets) {
    // `dets.x` and `dets.y` are the current mouse coordinates relative to the viewport
    // We dynamically set the control point of the Bézier curve to follow the mouse position
    Path = `M 100 200 Q ${dets.x} ${dets.y} 1300 200`

    // Animate the SVG path using GSAP to smoothly change the curve shape
    gsap.to("svg path", {
        attr: { d: Path }, // Set the new curve path
        duration: 0.3,     // Fast transition
        ease: "power3.out" // Easing for smooth motion
    })   
})

// When the mouse leaves the #string element
string.addEventListener("mouseleave", function() {
    // Animate the curve back to the original (finalPath)
    gsap.to("svg path", {
        attr: { d: finalPath },         // Reset to the original path
        duration: 1.5,                  // Slower transition
        ease: "elastic.out(1, 0.1)"     // Bouncy return animation
    })
})
