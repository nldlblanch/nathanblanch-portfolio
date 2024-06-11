const navbar = document.getElementById('navbar')
const navHome = document.getElementById("nav-home")
const navAbout = document.getElementById("nav-about")
const navProjects = document.getElementById("nav-projects")
const navContact = document.getElementById("nav-contact")
const projects = document.querySelectorAll('.project')
const projectContainer = document.getElementById('projectContainer')
const about = document.getElementById('about')
const contact = document.getElementById('contact-me')

// let glitchIntensity = 1; idea for later
let projectsOpen = false;
let aboutOpen = false;
let contactOpen = false;

const closeProjects = () => {
    projects.forEach((project) => {project.classList.replace("opened", "closed")})
    projectContainer.classList.replace('showScroll', 'hideScroll')
    projectsOpen = false;
    navProjects.classList.remove('glitch')
}
const closeAbout = () => {
    about.classList.replace('aboutOpen', 'aboutClose')
    aboutOpen = false;
    navAbout.classList.remove('glitch')
}
const closeContact = () => {
    contact.classList.replace('contactOpen', 'contactClose')
    contactOpen = false;
    navContact.classList.remove('glitch')
}

const openAbout = () => {
    aboutOpen = true;
    about.classList.remove('initiallyHidden')
    about.classList.replace('aboutClose', 'aboutOpen')
    navAbout.classList.add('glitch')
    about.classList.replace('mobileHidden', 'mobileOpen')
    navbar.classList.add('mobileFadeOut')
}

navHome.addEventListener("click", () => {
    //if projects are open, close them
    closeProjects()
    closeAbout()
    closeContact()
    
})

//WHEN YOU CLICK ABOUT
navAbout.addEventListener("click", () => {
    //close projects if open
    closeProjects()
    closeContact()
    openAbout()   
})
//when you click projects
navProjects.addEventListener("click", () => {
    projects.forEach((project) => {project.classList.replace("closed", "opened")})
    projectContainer.classList.replace('hideScroll', 'showScroll')
    projectContainer.classList.remove('initiallyHidden')
    closeAbout()
    closeContact()
    projectsOpen = true;
    navProjects.classList.add('glitch')

})
//when you click contact
navContact.addEventListener("click", () => {
    //if projects are open, close them
    closeProjects()
    closeAbout()
    contactOpen = true
    navContact.classList.add('glitch')
})
