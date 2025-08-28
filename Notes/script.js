const inputbox = document.querySelectorAll('.note')
const btn = document.querySelector('.notebtn')
const inputcontainer = document.querySelector('.note-container')

 btn.addEventListener('click', ()=>{
    let note = document.createElement('p')
    let img = document.createElement('img')
    note.className = 'note'
    note.setAttribute('contenteditable','true')
    img.src = 'delect.svg'
    inputcontainer.appendChild(note).appendChild(img)
 })

 inputcontainer.addEventListener('click', function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();

    }
 })