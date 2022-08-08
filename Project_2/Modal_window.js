const openModal=document.getElementsByClassName("open-modal")
const ModalWindow=document.getElementById("Modal_window")
const closeModal=document.getElementById("close-modal")

for(let i=0;i<openModal.length;i++){
    openModal[i].addEventListener("click",()=>{
        ModalWindow.style.display="block"
        
    })
}
closeModal.addEventListener("click",()=>{
    ModalWindow.style.display="none"
})