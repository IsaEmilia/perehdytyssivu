
const title = document.getElementsByClassName('info-header')
const content = document.getElementsByClassName('info-osio')

    for(let i=0; i < title.length; i++){
        title[i].addEventListener("click", function() {
            console.log("click")
            title[i].classList.toggle('info-header-active')  

            for(let i=0; i < content.length; i++){   

                if(title[i].classList.contains('info-header-active')){
                    content[i].classList.toggle("active-content")
                    console.log("activated")
                }   
                else if(content[i].classList.contains("active-content")){
                    content[i].classList.remove("active-content")
                    console.log("deactivated")
                }    
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