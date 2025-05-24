// Animate the #box inside #page1 when the page loads
gsap.from("#page1 #box", {
    scale: 0,         // Starts from scale 0 (invisible and shrunk)
    duration: 2,      // Animation runs for 2 seconds
    delay: 1,         // Starts after 1 second delay
    rotate: 360       // Rotates the element 360 degrees while scaling up
});

// Animate the #box inside #page2 using ScrollTrigger
gsap.from("#page2 #box", {
    scale: 0,         // Starts from scale 0
    duration: 2,      // Animation duration
    delay: 1,         // Starts after 1 second
    rotate: 360,      // Rotates while scaling

    // ScrollTrigger is used to trigger the animation when #page2 #box enters the viewport
    scrollTrigger: {
        trigger: "#page2 #box",   // Element that triggers the animation
        scroller: "body",         // Scroll container (in this case, the whole page)
        markers: "true",          // Shows visual markers for debugging (can be removed in production)
        start: "top 60%"          // Animation starts when the top of the element hits 60% of the viewport height
    }
});

// Animate the #box inside #page3 when the page loads (delayed)
gsap.from("#page3 #box", {
    scale: 0,         // Starts from scale 0
    duration: 2,      // Duration of animation
    delay: 5,         // Delayed start by 5 seconds (to let other animations finish)
    rotate: 360       // Rotates during scaling
});
