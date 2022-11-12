document.addEventListener("DOMContentLoaded", function(event) { 
    let dateDiv = document.querySelector(".header_date")
    
    function getDate(){
        let date = new Date
        let hour = date.getHours()
        let fullDate = getCorectDate([date.getDate(),date.getMonth()+1,date.getFullYear(),date.getHours(),date.getMinutes()])
        dateDiv.innerHTML = `${fullDate[0]}. ${fullDate[1]}. ${fullDate[2]} <br> <br> ${fullDate[3]}:${fullDate[4]}`
        requestAnimationFrame(getDate)
    }


    function getCorectDate(arr){
        for (let i = 0; i < arr.length; i++) {
           if(arr[i]<10){
            let a = arr[i]
                arr[i] = `0${a}`
           }
    
           
         }
         return arr
    }





   
    getDate()
  });