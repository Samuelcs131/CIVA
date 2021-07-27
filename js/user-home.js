// AJUSTE DE RESPONSIVIDADE

let f = function(){
 function screenWidth(){
  if(window.innerWidth < 1100){ 
    list[0].className = 'list'
 } else {
    list[0].className = 'list active'
 }
}
window.addEventListener('resize',screenWidth,false) 
}
window.addEventListener('DOMContentLoaded', f, false)



// AJUSTE DE RESPONSIVIDADE INICIAL
if(window.innerWidth < 1100){
   list[0].className = 'list' 
 } else {
   list[0].className = 'list active'
 }



/* 

 function menuHistory(){

  let container_foto = document.querySelector(".container-foto")
  let info_perfil = document.querySelector(".info-perfil")
  let info_qr = document.querySelector(".info-qr")
  let container_profile = document.querySelector(".container-profile")
  

  container_foto.style.display = "none"
  info_perfil.style.display = "none"
  info_qr.style.display = "none"

  container_profile.style.position = "absolute" 
  container_profile.style.margin = "auto"
  container_profile.style.width = "100%"
 


}  */
