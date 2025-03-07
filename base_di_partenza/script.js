document.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    let hero = document.querySelector(".hero");
    let getStarted = document.querySelector(".get-started");
    let heroBottom = hero.offsetTop + hero.offsetHeight;

    if (window.scrollY > heroBottom - 50) {
        navbar.classList.add("scrolled");
        getStarted.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
        getStarted.classList.remove("scrolled");
    }
});

// Animazione delle "M"
setInterval(() => {
    let mElement = document.querySelector(".m-animate");
    mElement.style.transform = `translateY(${Math.random() * 10}px)`;
}, 500);
