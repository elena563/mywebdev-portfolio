function show() {
    const menu = document.getElementById("menucont");
    const isMobile = window.matchMedia("(max-width: 1100px)").matches;

    if (isMobile) {
        // Se la media query è attiva, mostra/nascondi il menu
        menu.classList.toggle("openmenu");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const roomOptions = document.querySelectorAll('.room-option.desktop');
    const roomGalleries = document.querySelectorAll('.room_gallery');
    let isMobile = window.matchMedia("(max-width: 500px)").matches;;

    roomOptions.forEach(function (roomOption, index) {
        
        if (roomOption.classList.contains('comfort')) {
            if (isMobile) {
                roomOption = document.querySelector('.room-option.comfort.mobile');
            } else {
                roomOption = document.querySelector('.room-option.comfort.desktop');
            }
        }
        if (roomOption.classList.contains('vasca')) {
            if (isMobile) {
                roomOption = document.querySelector('.room-option.vasca.mobile');
            } else {
                roomOption = document.querySelector('.room-option.vasca.desktop');
            }
        }
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

//price generator
function getprice() {
    let people = adults + kids;
    let price = 0;
    let rooms = [69, 85, 102, 120]
for (el of rooms) {
    price += (price*(10/100))*(adults-1)    /*increase for every added adult*/
    price += (price*(5/100))*kids           /*increase for every kid*/
    price += (price*(10/100))*season        /*low, medium, high season*/  
    price += (price*(10/100))*board        /*b&b, half, full board*/  
    if (people >= 2){
        rooms.pop()         /*jacuzzi room only for two people*/
    }
}   return rooms
}

function optionConverter(string) {  /*stringa -> numero*/
    switch (parola) {
        case 'Bassa':
        case 'B&B':
            return 1;
        case 'Mezza':
            return 2;
        case 'Alta':
        case 'Completa':
            return 3;
    }
}

const adults = document.querySelector('.adults').value;
const kids = document.querySelector('.kids').value;
const season = optionConverter(document.querySelector('.season').value);
const board = optionConverter(document.querySelector('.board').value);
let nRooms = document.querySelector('.rooms').value;;



























