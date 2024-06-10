const navHome = document.getElementById("nav-home")
const navAbout = document.getElementById("nav-about")
const navProjects = document.getElementById("nav-projects")
const navContact = document.getElementById("nav-contact")
const projects = document.querySelectorAll('.project')
const projectContainer = document.getElementById('projectContainer')
let projectsOpen = false;

const closeProjects = () => {
    projects.forEach((project) => {project.classList.replace("opened", "closed")})
    projectContainer.classList.replace('showScroll', 'hideScroll')
    projectsOpen = false;
}
navHome.addEventListener("click", () => {
    //if projects are open, close them
    if (projectsOpen === true) closeProjects()
})

navAbout.addEventListener("click", () => {
    //if projects are open, close them
    if (projectsOpen === true) closeProjects()

})

navProjects.addEventListener("click", () => {
    projects.forEach((project) => {project.classList.replace("closed", "opened")})
    projectContainer.classList.replace('hideScroll', 'showScroll')
    projectsOpen = true;
})

navContact.addEventListener("click", () => {
      //if projects are open, close them
      if (projectsOpen === true) closeProjects()
})
