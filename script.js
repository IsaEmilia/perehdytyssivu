// Code for making accordion style menu

// Initiate variables
const title = document.getElementsByClassName('info-header')
const content = document.getElementsByClassName('info-osio')

    for(let i=0; i < title.length; i++){    // Iterate through HTMLCollection to make it an usable list of elements
        title[i].addEventListener("click", function() {   // Add click function for every title element
            title[i].classList.toggle('info-header-active')  // toggle style on click

            for(let i=0; i < content.length; i++){          // Iterate through another HTMLCollecton

                if(title[i].classList.contains('info-header-active')){  // Add style based on what style previous element (title) has
                    content[i].classList.add("active-content")        
                   
                }   
                else if(content[i].classList.contains("active-content")){  // Remove style based on what style previous element (content) has
                    content[i].classList.remove("active-content")
                    
                }    
            }  
        })
    }


// Code for a modal

const modal = document.getElementById("modal");  // get the modal
const img = document.getElementsByClassName("sarastia-img"); // get images for modal
const modalImg = document.getElementById("img01"); 

for(let i=0; i < img.length; i++){ 
    img[i].addEventListener('click', function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
)}

const close = document.getElementById("close"); // get the close button for modal

close.addEventListener('click', function() {
    modal.style.display = "none";
  })



//----------------------------------------------------------------------------------------------------------------------


// TOP SECRET CODE

// DO NOT READ

// CEASE 

// NO SCROLL

function onKonamiCode(cb) {
    var input = '';
    var key = '38384040373937396665';
    document.addEventListener('keydown', function (e) {
        input += ("" + e.keyCode);
        if (input === key) {
        return cb();
        }
        if (!key.indexOf(input)) return;
        input = ("" + e.keyCode);
    });
    }
    
    onKonamiCode(function () {alert("Moi!")})
