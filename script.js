const navHome = document.getElementById("nav-home")
const navAbout = document.getElementById("nav-about")
const navProjects = document.getElementById("nav-projects")
const navContact = document.getElementById("nav-contact")
const projects = document.querySelectorAll('.project')
let projectsOpen = false;

navHome.addEventListener("click", () => {
    //if projects are open, close them
    if (projectsOpen === true) {
        projects.forEach((project) => {project.classList.replace("opened", "closed")})
        projectsOpen = false;
    }
})

navAbout.addEventListener("click", () => {
    //if projects are open, close them
    if (projectsOpen === true) {
        projects.forEach((project) => {project.classList.replace("opened", "closed")})
        projectsOpen = false;
    }

})

navProjects.addEventListener("click", () => {
    projects.forEach((project) => {project.classList.replace("closed", "opened")})
    projectsOpen = true;
})

navContact.addEventListener("click", () => {
      //if projects are open, close them
      if (projectsOpen === true) {
        projects.forEach((project) => {project.classList.replace("opened", "closed")})
        projectsOpen = false;
    }
})
