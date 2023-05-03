let selectionButtons = document.querySelectorAll(".selected-projects > button")
let projects = document.querySelectorAll(".project")
let projectImages = document.querySelectorAll(".project > img")
let nextButton = document.querySelector("#next")
let prevButton = document.querySelector("#prev")

prevButton.addEventListener('click', prev)
nextButton.addEventListener('click', next)
selectionButtons.forEach(e => {e.addEventListener('click', slideButton)})
projectImages.forEach(e => {e.addEventListener('click', hideDescription)})

function prev(){
    slide(-1)
}

function next(){
    slide(1)
}

function slideButton(event){
    let active = document.querySelector('.active')
    let destinationIndex = [...selectionButtons].indexOf(event.target)
    let currentIndex = [...projects].indexOf(active)
    
    if(destinationIndex === currentIndex) return;
    slide(destinationIndex - currentIndex)
}

function hideDescription(event){
    let active = document.querySelector('.active > .project-description')

    if(active.classList.contains('hide')){
        active.classList.remove('hide')
    } else{
        active.classList.add("hide")
    }
}

function slide(offset){
    let active = document.querySelector('.active')
    let currentIndex = [...projects].indexOf(active)
    
    selectionButtons[currentIndex].classList.remove("selected")
    
    currentIndex += offset
    if(currentIndex < 0) currentIndex = projects.length - 1
    if(currentIndex >= projects.length) currentIndex = 0

    active.classList.remove('active')
    projects[currentIndex].classList.add('active')
    selectionButtons[currentIndex].classList.add("selected")
}