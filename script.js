//info form
function submit() {
    const user = document.getElementsByTagName("input").value;
    const uname = user[0];
    const umail = user[1];
    const umessage = document.querySelector("textarea").value;
    const form = {
        name: uname,
        mail: umail,
        message: umessage
    }
}
//menu hamburger
function show() {
    const menu = document.getElementById("menucont");
    const isMobile = window.matchMedia("(max-width: 600px)").matches;

    if (isMobile) {
        // Se la media query è attiva, mostra/nascondi il menu
        menu.classList.toggle("mymenu");
    }
}