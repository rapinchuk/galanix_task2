document.addEventListener("DOMContentLoaded", function(event) { 
    let storage = window.localStorage;
    let images = document.querySelectorAll(".img_block-wrap")
    let imageClose = document.querySelectorAll(".img_close")
    let countSpan = document.querySelector("#count_span")
    let resetBtn = document.querySelector(".button-18")
    let counter = 0
    
    resetBtn.addEventListener("click",(e)=>{
        counter=0
        storage.clear()
        checkStorage()
        resetBtn.style.display="none"
    })


    imageClose.forEach(el=>{
        el.addEventListener("click",(e)=>{
           storage.setItem(e.target.closest(".img_block-wrap").getAttribute("id"),"0")
           e.target.closest(".img_block-wrap").style.display="none"
           counter--
           countSpan.innerHTML = " " +counter
           console.log(storage.getItem(e.target.closest(".img_block-wrap").getAttribute("id")))
           resetBtn.style.display="block"
        })
    })
    
    function checkStorage(){
        if(storage.length < images.length ){
            images.forEach(el=>{
                storage.setItem(el.getAttribute("id"),el.getAttribute("show-data"))
                el.cssText = "display: block;";
            })
        }
        images.forEach(el=>{
                
                let id=el.getAttribute("id")
            
                // console.log(storage.getItem(id))
                if(storage.getItem(id)>0){
                    el.style.display = "block"
                    counter++
                    
                }
                
            })
            countSpan.innerHTML = " " +counter
            if(counter< images.length){
                resetBtn.style.display="block"
            }
    }
  
    

  
   
   
    
    

    checkStorage()
    
    console.log(storage)
  });