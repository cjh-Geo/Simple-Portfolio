const topBtn = document.querySelector(".topbutton");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        topBtn.classList.add("active");
    } else {
        topBtn.classList.remove("active");
    }
})