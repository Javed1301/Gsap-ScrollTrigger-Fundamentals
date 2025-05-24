// Animate the #box inside #page1 when the page loads
gsap.from("#page1 #box", {
    scale: 0,         // Starts at scale 0 (completely shrunk)
    duration: 2,      // Animation duration is 2 seconds
    delay: 1,         // Delay before starting is 1 second
    rotate: 360       // Rotates the element 360 degrees while scaling up
});

// Animate the <h1> inside #page2 when it scrolls into view
gsap.from("#page2 h1", {
    opacity: 0,       // Starts fully transparent
    duration: 2,      // Runs for 2 seconds
    x: 500,           // Starts 500px to the right and slides into place

    // ScrollTrigger configuration
    scrollTrigger: {
        trigger: "#page2 h1",   // The element that triggers the animation
        scroller: "body",       // The scrolling container (in this case, entire page)
        // markers: true,       // Uncomment to show visual scroll markers for debugging
        start: "top 50%"        // Animation starts when the top of the element hits 50% of viewport height
    }
});

// Animate the <h2> inside #page2 when it scrolls into view
gsap.from("#page2 h2", {
    opacity: 0,       // Starts invisible
    duration: 2,      // Duration of the animation
    x: -500,          // Starts 500px to the left and slides into place

    scrollTrigger: {
        trigger: "#page2 h2",   // Element that triggers this animation
        scroller: "body",       // Scrolling container
        // markers: true,       // Uncomment to see scroll trigger markers
        start: "top 50%"        // Starts when element top hits 50% of the viewport
    }
});

// Animate the #box inside #page3 using scrollTrigger with scrub effect
gsap.from("#page3 #box", {
    scale: 0,         // Starts shrunk
    duration: 2,      // Animation duration
    opacity: 0,       // Starts fully transparent
    rotate: 720,      // Rotates two full turns (720 degrees)

    scrollTrigger: {
        trigger: "#page3 #box",   // Element that triggers the animation
        scroller: "body",         // Scrolling container
        markers: true,            // Shows visual indicators for debugging (remove in production)
        start: "top 60%",         // Animation starts when the top of the element hits 60% of viewport
        end: "top 30%",           // Animation ends when the top of the element reaches 30% of viewport
        scrub: 3                  // Creates a smooth sync between scroll position and animation progress (scrubbing effect)
    }
});
