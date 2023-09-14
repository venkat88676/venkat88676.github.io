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

function sendMail(e) {
  e.preventDefault();
  document.getElementById('sendBtn').innerHTML = `<i class="fa fa-refresh fa-spin"></i> Send`
  document.getElementById('sendBtn').disabled = true;
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone:document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  console.log(params)

  const serviceID = "service_yx374yb";
  const templateID = "template_o8fbfhl";

  emailjs.send(serviceID, templateID, params)
  .then((res) => {
    console.log(res);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("phone").value = "";
    alert("your message sent successfully");
  })
  .catch((err)=>alert(err))
  .finally(() => {
    document.getElementById('sendBtn').innerHTML = `Send`
    document.getElementById('sendBtn').disabled = false;
  })
}