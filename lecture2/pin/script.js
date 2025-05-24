// Animate the <h1> inside #page2 to slide out to the left while pinning the section
gsap.to("#page2 h1", {
    transform: "translate(-200%)", // Moves the element left by 200% of its own width

    scrollTrigger: {
        trigger: "#page2",   // The animation is triggered based on the scroll position of #page2
        scroller: "body",    // The body is the scrolling container (default for normal pages)
        markers: true,       // Shows start and end markers on screen for debugging
        start: "top 0%",     // Animation starts when the top of #page2 hits the top of the viewport
        end: "top -100%",    // Animation ends when the top of #page2 has scrolled past the top of the viewport by 100%
        scrub: 2,            // Creates a smooth connection between scroll position and animation progress (scroll scrubbing)
        pin: true            // Pins the #page2 section in place during the animation (creates a parallax-like effect)
    }
});
// whenever using pin trigger the parent element