const button = document.getElementsByClassName("infobutton")
const content = document.getElementsByClassName("info-osio")
button.addEvenListener('click', openSesame())

function openSesame() {
    content.classList.toggle('show')
    console.log("Teen asioita")
}

openSesame()

console.log("toiminnassa")