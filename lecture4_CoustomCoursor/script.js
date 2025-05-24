// Selecting the main container where mouse tracking will happen
var main = document.querySelector("#main");

// Selecting the custom cursor element
var coursor = document.querySelector("#coursor");

// Selecting the image over which the cursor text and scale will change
var image = document.querySelector("#image");

// The 'mousemove' event on the main container tracks mouse movement
main.addEventListener("mousemove", function(event) {
    // `event` contains all details about the mouse movement

    // Animate the custom cursor to follow the actual mouse position using GSAP
    gsap.to(coursor, {
        x: event.x,         // Move the custom cursor to the mouse X position
        y: event.y,         // Move the custom cursor to the mouse Y position
        duration: 0.5,      // Animation duration (0.5 seconds)
        ease: "back.out",   // Easing for a smooth bounce-back effect
    });
});

// When the mouse enters the image area
image.addEventListener("mouseenter", function() {
    coursor.innerHTML = "View More"; // Show text in the custom cursor
    gsap.to(coursor, {
        scale: 3           // Enlarge the custom cursor
    });
});

// When the mouse leaves the image area
image.addEventListener("mouseleave", function() {
    coursor.innerHTML = ""; // Remove the text from the custom cursor
    gsap.to(coursor, {
        scale: 1           // Return the custom cursor to original size
    });
});


// ✅ The #overlay div covers the entire #image using absolute positioning.
// ✅ Since it's transparent and placed on top (z-index: 10), it intercepts all mouse events.
// ✅ This means instead of the mouse jumping between <img> and gaps, it always stays on #overlay.
// ✅ So, enter/leave events trigger consistently, preventing flicker or jitter.
// ✅ Think of #overlay like a "shield" over #image that simplifies mouse tracking.
