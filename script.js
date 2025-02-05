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

inView(".scroll-section div", (element) => {
    animate(
        element,
        { opacity: 1, x: [-100, 0] },
        {
            duration: 1.3,
            delay: 0.7, // Slight delay after h1
            easing: [0.17, 0.55, 0.55, 1],
        }
    )

    return () => animate(element, { opacity: 0, x: -100 })
})

hover(".hover-text", (element) => {
    // Store initial colors
    const originalBgColor = getComputedStyle(element).backgroundColor;
    const originalColor = getComputedStyle(element).color;
    
    const animation = animate(
        element, 
        { 
            scale: 1.1,
            backgroundColor: "#FFFFFF",
            color: "#000000",
        },
        {
            duration: 0.3,
            easing: [0.17, 0.55, 0.55, 1]
        }
    )
  
    return () => animate(
        element, 
        { 
            scale: 1.0,
            backgroundColor: originalBgColor,
            color: originalColor
        },
        {
            duration: 0.3,
            easing: [0.17, 0.55, 0.55, 1]
        }
    )
})

const footer = document.querySelector('.footer');
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    
    // Show footer when near bottom of page
    if (currentScrollPosition + windowHeight >= documentHeight - 100) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
    
    lastScrollPosition = currentScrollPosition;
});

window.addEventListener('scroll', () => {
    const topBar = document.querySelector('.top-bar');
    const scrollPosition = window.scrollY;
    
    // Change to black after scrolling 100px
    if (scrollPosition > 100) {
        topBar.classList.add('scrolled');
    } else {
        topBar.classList.remove('scrolled');
    }
});


