// Listening to mouse wheel scroll event on the entire window
window.addEventListener("wheel", function(event) {
    // `event.deltaY` tells us the direction of the scroll
    // > 0 → user is scrolling down
    // < 0 → user is scrolling up

    if (event.deltaY > 0) {
        // If scrolling down, animate the marquee element to move left continuously

        gsap.to(".marquee", {
            transform: 'translateX(-200%)',  // Moves content way to the left
            duration: 4,                     // Animation duration
            ease: "none",                    // No easing for constant speed
            repeat: -1                       // Infinite loop
        });

        gsap.to(".marquee img", {
            rotate: 180                      // Rotates the image 180° when scrolling down
        });

    } else {
        // If scrolling up, move marquee back to original position (rightwards)

        gsap.to(".marquee", {
            transform: 'translateX(0%)',     // Resets the movement to original
            duration: 4,
            ease: "none",
            repeat: -1
        });

        gsap.to(".marquee img", {
            rotate: 0                        // Rotates the image back to normal
        });
    }
});
