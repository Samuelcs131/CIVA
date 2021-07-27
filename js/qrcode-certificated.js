function qrcodeCertificated(){


    const specs = {video:{width: 100}}

    navigator.mediaDevices.getUserMedia(specs).then(stream=>{
    
      const videoElement = document.querySelector("#scanner-certificated")
    videoElement.srcObject = stream
 
       }).catch(error=>console.log(erro))
  }


  window.addEventListener("DOMContentLoaded", qrcodeCertificated)