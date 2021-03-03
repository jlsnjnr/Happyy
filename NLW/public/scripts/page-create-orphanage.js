// create map

const map = L.map('mapid').setView([-23.2269937,-45.9027131], 15)

// create and add titleLayer

L.
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon 

const icon = L.icon({

    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]

})

let marker;

// creat and add marker

map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // oegar os dados via url

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    // remover icon

    marker && map.removeLayer(marker)

    // add icon layer

    marker = L.marker([lat, lng], { icon })
    .addTo(map)

})

// add photos zone

function addPhotoField() {
    
    const container = document.querySelector('#images')

    const fieldsContainer = document.querySelectorAll('.new-upload')

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    input.value = ""

    container.appendChild(newFieldContainer)

}

function deleteField(event) {
    const span = event.currentTarget 

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        //limpar o valor do campo de colar o link
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove();

}

// troca do sim e não 

function toggleSelect(event) {

    // retirar a class .active

    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    // pegar o botão clicado.

    const button = event.currentTarget
    button.classList.add('active')

    // verficar se é sim ou nao 

    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value    

}