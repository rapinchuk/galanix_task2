document.addEventListener("DOMContentLoaded", function(event) { 
    let images = document.querySelectorAll(".img_block")
    let modal = document.querySelector(".modal")
    let modalImg = document.querySelector(".modal_img")
    let modalClose = document.querySelector(".modal_close")
    images.forEach(el=>{
       
        el.addEventListener("click",modalHandler)
    })
    modalClose.addEventListener("click",()=>{
        modal.style.display = "none";
        document.body.style.overflow = "auto"
    })
    modal.addEventListener("click",(e)=>{
        if(e.target.classList.contains("modal_img")) {
            return;
            
          }
        modal.style.display = "none";
        document.body.style.overflow = "auto"})
    

    function modalHandler(e){
        modal.style.display = "block";
        modalImg.setAttribute("src",e.target.getAttribute("image-data"))
        e.target.getAttribute("image-data")
        console.log( window.getComputedStyle(e.target).getPropertyValue("image-data").toString())
        document.body.style.overflow = "hidden"
    }
  });