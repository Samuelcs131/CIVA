// AJUSTE DE RESPONSIVIDADE

let f = function(){
    function screenWidth(){
     if(window.innerWidth < 1100){ 
       list[2].className = 'list'
    } else {
       list[0].className = 'list active'
    }
   }
   window.addEventListener('resize',screenWidth,false) 
   }
   window.addEventListener('DOMContentLoaded', f, false)
   
   
   
 
   