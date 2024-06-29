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

const selected = {
    adults : parseInt(document.querySelector('.adults').value),
    kids : parseInt(document.querySelector('.kids').value),
    season : optionConverter(document.querySelector('.season').value),
    board : optionConverter(document.querySelector('.board').value),
    nRooms : parseInt(document.querySelector('.rooms').value)
}

//price generator
function displayMessage(message) {
    $("#messageContainer").html(message);
}
function getprice() {
    let people = selected.adults + selected.kids;
    let roomRates = {
        economy: 69,
        comfort: 85,
        deluxe: 102,
        jacuzzi: 120
    };
    let prices = [];
    let guestsPerRoomRatio = people / selected.nRooms;
    let maxGuestsPerRoomRatio = 4;
    if (guestsPerRoomRatio > maxGuestsPerRoomRatio) {
            displayMessage("Il numero di ospiti per stanza è troppo elevato. Considera di aggiungere stanze o ridurre il numero di ospiti per stanza.");
            return prices;
    }
    for (let el in roomRates) {
        if (people > 2 && el === 'jacuzzi') continue;     /*jacuzzi room only for two people*/
        let selectedRoom = roomRates[el];
        let price = selectedRoom += (selectedRoom*(10/100))*(selected.adults-1)    /*increase for every added adult*/
        + (selectedRoom*(5/100))*selected.kids           /*increase for every kid*/
        + (selectedRoom*(10/100))*selected.season        /*low, medium, high season*/  
        + (selectedRoom*(10/100))*selected.board         /*b&b, half, full board*/  
        prices.push(price.toFixed(2));
    }   return prices
}

function optionConverter(string) {  /*string -> number*/
    switch (string) {
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

function displayPrice(prices) {
    const priceCont = $("#priceContainer");
    priceCont.empty();
    
    // Aggiunge il prezzo di ogni tipo di stanza al contenuto dell'elemento <p>
    prices.forEach(room => {
        priceCont.append(`<p>${room.el}: ${room.price.toFixed(2)} €</p>`);
    });
}




























