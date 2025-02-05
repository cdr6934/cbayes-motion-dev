const { animate, inView, hover} = window.Motion

inView(".scroll-section h1", (element) => {
    animate(
        element,
        { opacity: 1, x: [-100, 0] },
        {
            duration: 1.3,
            easing: [0.17, 0.55, 0.55, 1],
        
        }
    )

    return () => animate(element, { opacity: 0, x: -100 })
})

inView(".scroll-section h2", (element) => {
    animate(
        element,
        { opacity: 1, x: [-100, 0] },
        {
            duration: 1.3,
            delay: 0.5, // Slight delay after h1
            easing: [0.17, 0.55, 0.55, 1],
        }
    )

    return () => animate(element, { opacity: 0, x: -100 })
})

