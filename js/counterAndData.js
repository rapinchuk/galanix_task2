document.addEventListener("DOMContentLoaded", function(event) { 
    
    let images = document.querySelectorAll(".img_block")
    let countSpan = document.querySelector("#count_span")
    function counter(){
       countSpan.innerHTML = " " +images.length
    }
    

    let dateDiv = document.querySelector(".header_date")
    
    function getDate(){
        let date = new Date
        dateDiv.innerHTML = `${date.getDate()}. ${date.getMonth()+1}. ${date.getFullYear() } <br> <br> ${date.getHours()}:${date.getMinutes()}`
        requestAnimationFrame(getDate)
    }








    counter()
    getDate()
  });