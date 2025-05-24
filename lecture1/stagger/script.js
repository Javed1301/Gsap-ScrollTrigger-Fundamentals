// Animate all <h1> elements using GSAP's `from()` method, which animates from the given values to the element's current state
gsap.from("h1", {
    opacity: 0,   // Start from fully transparent (opacity 0)
    duration: 1,  // Animation duration is 1 second
    y: 30,        // Start 30 pixels below the original position and animate upward
    delay: 1,     // Wait for 1 second before starting the animation
    stagger: 1    // Animate each <h1> one after another with a 1-second gap between each
    // Note: You can also use a negative value for `stagger` to animate in reverse order or overlap animations
})
