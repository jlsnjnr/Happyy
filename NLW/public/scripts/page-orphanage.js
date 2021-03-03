const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map

const map = L.map('mapid', options).setView([-23.2269937,-45.9027131], 15)

// create and add titleLayer

L.
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon 

const icon = L.icon({

    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})

// create and addMarker
L.
    marker([-23.2269937,-45.9027131], { icon }).
    addTo(map)

// galeria 

function selectImage(event) {
    const button =  event.currentTarget 

    // 

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    
    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // para adicionar dnv

    button.classList.add('active')

    // selecinar a imagem clicada 

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar 

    imageContainer.src = image.src

} 