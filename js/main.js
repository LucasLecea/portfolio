const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const menuOpen = navLinks.classList.contains("active");
    menuBtn.textContent = menuOpen ? "×" : "☰";
    menuBtn.setAttribute(
        "aria-label",
        menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
    );
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Abrir menú de navegación");
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Abrir menú de navegación");
    }
});