let skills = document.querySelectorAll('.skill')
let offset = 10

skills.forEach(e => {e.addEventListener('mouseenter', showText)})
skills.forEach(e => {e.addEventListener('mouseleave', hideText)})

async function showText(event){
    event.target.children[1].classList.remove("from-left", "from-right", "from-up", "from-down", "to-left", "to-right", "to-up", "to-down")
    if(event.offsetX <= offset){
        event.target.children[1].classList.add("from-left")
    } else if(event.offsetX >= event.target.offsetWidth - offset){
        event.target.children[1].classList.add("from-right")
    } else if(event.offsetY <= offset){
        event.target.children[1].classList.add("from-up")
    } else if(event.offsetY >= event.target.offsetHeight - offset){
        event.target.children[1].classList.add("from-down")
    }
    await sleep(100);
    event.target.children[1].classList.add("normal")
}

function hideText(event){
    event.target.children[1].classList.remove("normal", "from-left", "from-right", "from-up", "from-down", "to-left", "to-right", "to-up", "to-down")
    if(event.offsetX <= offset){
        event.target.children[1].classList.add("to-left")
    } else if(event.offsetX >= event.target.offsetWidth - offset){
        event.target.children[1].classList.add("to-right")
    } else if(event.offsetY <= offset){
        event.target.children[1].classList.add("to-up")
    } else if(event.offsetY >= event.target.offsetHeight - offset){
        event.target.children[1].classList.add("to-down")
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}