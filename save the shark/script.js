function show() {
    const menu = document.getElementById("menucont");
    const isMobile = window.matchMedia("(max-width: 800px)").matches;

    if (isMobile) {
        // Se la media query è attiva, mostra/nascondi il menu
        menu.classList.toggle("openmenu");
    }
}