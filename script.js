
const title = document.getElementsByClassName('info-header')
const content = document.getElementsByClassName('info-osio')

    for(let i=0; i < title.length; i++){
        title[i].addEventListener("click", function() {
            title[i].classList.toggle('info-header-active')  

            for(let i=0; i < content.length; i++){   

                if(title[i].classList.contains('info-header-active')){
                    content[i].classList.add("active-content")
                   
                }   
                else if(content[i].classList.contains("active-content")){
                    content[i].classList.remove("active-content")
                    
                }    
            }
            
        })
    }
