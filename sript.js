let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

const sections = document.querySelectorAll("section");

const showSection = () => {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", showSection);
showSection(); // Initial ausführen

function smoothScroll(target) {
    let element = document.querySelector(target);
    if (!element) return;
    
    let targetPosition = element.getBoundingClientRect().top + window.scrollY;
    let startPosition = window.scrollY;
    let distance = targetPosition - startPosition;
    let duration = 800; // 800ms Scroll-Zeit
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        smoothScroll(this.getAttribute("href"));
    });
});