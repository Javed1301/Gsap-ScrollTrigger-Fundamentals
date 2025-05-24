// Instead of animating each box separately with delays, we use a GSAP timeline to play animations in sequence

// Create a GSAP timeline instance which allows chaining animations one after another
var tl = gsap.timeline()

// Animate box1:
// - Move it 1000px to the right
// - Rotate it a full circle (360 degrees)
// - The animation lasts for 1.5 seconds
tl.to("#box1", {
    x: 1000,
    rotate: 360,
    duration: 1.5
})

// Animate box2 immediately after box1 finishes:
// - Move it 1000px to the right
// - Change its background color to yellow
// - Animation lasts 1.5 seconds
tl.to("#box2", {
    x: 1000,
    backgroundColor: "yellow",
    duration: 1.5
})

// Animate box3 after box2 finishes:
// - Move it 1000px to the right
// - Scale it down to 50% of its size
// - Make it circular by setting border-radius to 50%
// - Rotate it 360 degrees
// - Animation lasts 1.5 seconds
tl.to("#box3", {
    x: 1000,
    scale: 0.5,
    borderRadius: "50%",
    rotate: 360,
    duration: 1.5
})

/*
🟡 Difference Between Timeline and Stagger:

✅ timeline:
- Each `.to()` animation runs **after** the previous one finishes.
- Great for full control and more complex, step-by-step sequences.
- You don’t have to manually manage delays — GSAP handles the timing.

✅ stagger:
- Runs the same animation on **multiple elements** with a delay between each start.
- It’s used for animating **lists of similar elements** (like multiple <h1> tags).
- Only works when animating multiple targets at once.

Use `timeline` for sequential steps, and `stagger` for animating multiple similar items with spacing!
*/
