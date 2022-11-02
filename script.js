
const title = document.getElementsByClassName('info-header')
const content = document.getElementsByClassName('info-content')

    for(let i=0; i < title.length; i++){
        title[i].addEventListener("click", function() {
            console.log("click")
            
                for(let i=0; i < content.length; i++){
                    content[i].classList.toggle('active')
                    console.log("activated")
                }
        })
    }
console.log("toiminnassa")



/*title.addEventListener('click', () => {
        const content = document.getElementById("osio1")
        const arrow = document.getElementById("info-arrow")
        content.classList.toggle("active-info")
        title.classList.toggle("active-color")
        arrow.classList.toggle("info-arrow-active")
        console.log("click")
    } )

console.log("toiminnassa")*/


/*document.querySelector('.info-header').addEventListener('click', function() {
    this.classList.toggle('active')
    this.classList.toggle('active-color')
    document.querySelector('.info-osio').classList.toggle('active-info-osio')
})*/