const icon = document.querySelector(".menu-page")
  function hamburger() {
      console.log("menu-icon")
      icon.classList.toggle("activate")
  }

const lightmode = document.querySelector(".lightmode")
const darkmode = document.querySelector(".darkmode")
const body = document.body
const nav =  document.querySelector("#nav-menu")
const footer = document.querySelector("#contact")
function lightMode(){
  console.log("lightmode")
  lightmode.classList.remove("activate")
  darkmode.classList.add("activate")
  nav.classList.remove("dark")
  footer.classList.remove("dark")
  body.classList.remove("dark")
}

function darkMode(){
  console.log("darkmode")
  darkmode.classList.remove("activate")
  lightmode.classList.add("activate")
  nav.classList.add("dark")
  footer.classList.add("dark")
  body.classList.add("dark")
}

const resume = document.getElementById("resume-button-1");
resume.onclick = () => {
  
    window.open("./resume/Venkatesh-Tiwari-Resume.pdf", "_blank")
   
}

const containerResume = document.getElementById("resume-button-2");
containerResume.onclick = () => {
   
    window.open("./resume/Venkatesh-Tiwari-Resume.pdf", "_blank")
    
}

const hamburgerResume = document.getElementById("resume-button-3");
hamburgerResume.onclick = () => {
   
    window.open("./resume/Venkatesh-Tiwari-Resume.pdf", "_blank")
    
}