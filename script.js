const navHome = document.getElementById("nav-home")
const navAbout = document.getElementById("nav-about")
const navProjects = document.getElementById("nav-projects")
const navContact = document.getElementById("nav-contact")
const projects = document.querySelectorAll('.project')
const projectContainer = document.getElementById('projectContainer')
const about = document.getElementById('about')
const contact = document.getElementById('contact-me')

let glitchIntensity = 1;
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
    about.classList.remove('initiallyHidden')
    about.classList.replace('aboutClose', 'aboutOpen')
    aboutOpen = true;
    navAbout.classList.add('glitch')
    
    
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
