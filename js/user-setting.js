let f = function(){

    function screenWidth(event){
   
     if(window.innerWidth < 1100){
       
        
       list[2].className = 'list'
     
    } else {
       list[1].className = 'list active'
    }
   
   }
   
   window.addEventListener('resize',screenWidth,false) 
   }
   
   window.addEventListener('DOMContentLoaded', f, false)
   
   
   if(window.innerWidth < 1100){
       
      list[2].className = 'list'
    
    } else {
      list[1].className = 'list active'
    }