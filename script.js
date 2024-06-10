const navHome = document.getElementById("nav-home")
const navAbout = document.getElementById("nav-about")
const navProjects = document.getElementById("nav-projects")
const navContact = document.getElementById("nav-contact")
const projects = document.querySelectorAll('.project')
const projectContainer = document.getElementById('projectContainer')
const about = document.getElementById('about')
const aboutNavReplacer = document.getElementById('aboutNavReplacer')
const projectsNavReplacer = document.getElementById('projectsNavReplacer')
const contactNavReplacer = document.getElementById('contactNavReplacer')


let projectsOpen = false;
let aboutOpen = false;
//remove slow startup animation
navHome.classList.remove('slow-animation')

const closeProjects = () => {
    projects.forEach((project) => {project.classList.replace("opened", "closed")})
    projectContainer.classList.replace('showScroll', 'hideScroll')
    projectsOpen = false;
}
const closeAbout = () => {
    about.classList.replace('aboutOpen', 'aboutClose')
    aboutOpen = false;
    navAbout.classList.replace('fadeOut', 'fadeIn')
    aboutNavReplacer.classList.replace('fadeIn', 'fadeOut')
}

navHome.addEventListener("click", () => {
    //if projects are open, close them
    if (projectsOpen === true) closeProjects()
    if (aboutOpen === true) closeAbout()
})

//WHEN YOU CLICK ABOUT
navAbout.addEventListener("click", () => {
    //close projects if open
    if (projectsOpen === true) closeProjects()
    about.classList.remove('initiallyHidden')
    about.classList.replace('aboutClose', 'aboutOpen')
    aboutOpen = true;
    //remove initial hidden div and replace class list
    aboutNavReplacer.classList.remove('initiallyHidden')
    navAbout.classList.replace('fadeIn', 'fadeOut')
    aboutNavReplacer.classList.replace('fadeOut', 'fadeIn')
    
})

navProjects.addEventListener("click", () => {
    projects.forEach((project) => {project.classList.replace("closed", "opened")})
    projectContainer.classList.replace('hideScroll', 'showScroll')
    projectContainer.classList.remove('initiallyHidden')
    if (aboutOpen === true) closeAbout()
    projectsOpen = true;

})

navContact.addEventListener("click", () => {
    //if projects are open, close them
    if (projectsOpen === true) closeProjects()
    if (aboutOpen === true) closeAbout()
})
