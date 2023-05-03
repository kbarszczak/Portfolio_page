let projects = document.querySelectorAll(".project")
let nextButton = document.querySelector("#next")
let prevButton = document.querySelector("#prev")

prevButton.addEventListener('click', prev)
nextButton.addEventListener('click', next)

function prev(){
    slide(-1)
}

function next(){
    slide(1)
}

function slide(offset){
    let active = document.querySelector('.active')
    let currentIndex = [...projects].indexOf(active)
    currentIndex += offset
    if(currentIndex < 0) currentIndex = projects.length - 1
    if(currentIndex >= projects.length) currentIndex = 0

    active.classList.remove('active')
    projects[currentIndex].classList.add('active')
}