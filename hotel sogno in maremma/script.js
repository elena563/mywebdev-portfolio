function show() {
    const menu = document.getElementById("menucont");
    const isMobile = window.matchMedia("(max-width: 1100px)").matches;

    if (isMobile) {
        // Se la media query è attiva, mostra/nascondi il menu
        menu.classList.toggle("openmenu");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const roomOptions = document.querySelectorAll('.room-option');
    const roomGalleries = document.querySelectorAll('.room_gallery');

    roomOptions.forEach(function (roomOption, index) {
        roomOption.addEventListener('click', function () {
            // Nascondi tutte le room_gallery tranne quella corrente
            roomGalleries.forEach(function (roomGallery, galleryIndex) {
                if (index === galleryIndex) {
                    if (roomGallery.classList.contains('padding')) {
                        roomGallery.classList.toggle('open');
                        setTimeout(function () {
                            roomGallery.classList.remove('padding');
                        }, 500);
                    } else {
                        roomGallery.classList.toggle('padding');
                        setTimeout(function () {
                            roomGallery.classList.toggle('open');
                        }, 500);
                    }
                } else {
                    roomGallery.classList.remove('open');
                    setTimeout(function () {
                        roomGallery.classList.remove('padding');
                    }, 500); 
                }
            });
        });
    });
});































