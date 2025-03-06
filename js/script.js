function toggleMenu() {
    document.querySelector("#off-canvas-section").classList.toggle("show");

    setTimeout(() => {
        document.querySelectorAll(".menu-icon")[0].classList.toggle("close-icon");
        document.querySelectorAll(".menu-icon")[1].classList.toggle("close-icon");
    }, 0);
}

const header = document.querySelector("#main-nav-bar");
const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 600) {
        header.classList.add("sticky-header");
        header.classList.remove("fade-out");
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
        if (header.classList.contains("sticky-header")) {
            header.classList.add("fade-out");
            setTimeout(() => {
                header.classList.remove("sticky-header");
            }, 250);
        }
    }
});

document.querySelector("#year").innerHTML = new Date().getFullYear();