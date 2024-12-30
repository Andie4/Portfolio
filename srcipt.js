// alert('test')

//-------------------------- nav menu burger----------------------------
document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector("#navbarNavDropdown");

    toggler.addEventListener("click", function () {
        menu.classList.toggle("show");

        // Animation du bouton burger
        toggler.classList.toggle("active");
    });
});
// inspiration menu burger : https://codepen.io/joesayegh/pen/jOEVPKO





// ----------------------------------slider -------------------------------

const slide = ["https://images.pexels.com/photos/2466778/pexels-photo-2466778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/21972308/pexels-photo-21972308/free-photo-of-femme-nuit-rue-sombre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}




//---------------------------- Pop up informations opquast ------------------------------------

    
function showInfos() {
    const popUp = document.getElementById("InfoPopUp");
    const background = document.querySelector(".bg-vert3");
  
    popUp.style.display = "block";
  }
  
  function hideInfos() {
    const popUp = document.getElementById("InfoPopUp");
    const background = document.querySelector(".bg-vert5");
  
    popUp.style.display = "none";
  }


// ---------------------------- Pop up mentions légales ------------------------------------

function showMentions() {
    const popUp = document.getElementById("mentions-legales");
    const background = document.querySelector(".bg-vert3");
  
    popUp.style.display = "block";
  }
  
  function hideMentions() {
    const popUp = document.getElementById("mentions-legales");
  
    popUp.style.display = "none";
  }

  // -----------------------------pop up Sources

  function showSources() {
    const popUp = document.getElementById("sources");
    const background = document.querySelector(".bg-vert3");
  
    popUp.style.display = "block";
  }
  
  function hideSources() {
    const popUp = document.getElementById("sources");
  
    popUp.style.display = "none";
  }




// -------------l'appel des projets---------
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    let projectId = urlParams.get("id");

    if (!projectId) {
        projectId = "resaweb";
        history.replaceState(null, "", "?id=" + projectId); // Met à jour l'URL sans recharger la page
    }

  
    fetch("projects.json")
      .then(response => response.json())
      .then(data => {
        const project = data.find(p => p.id === projectId);
  
        if (project) {
          // affiche les info des projets
          document.getElementById("project-title").textContent = project.title;
          document.getElementById("project-image").src = project.image;
          document.getElementById("project-objective").innerHTML = `<strong>Objectif : </strong> ${project.objective}`;
          document.getElementById("project-time").innerHTML = `<strong>Durée : </strong>${project.time}`;
          document.getElementById("project-process").innerHTML = `<strong>Processus : </strong> ${project.process}`;
          document.getElementById("project-constraints").innerHTML = `<strong>Contraintes : </strong> ${project.constraints}`;
          const projectLink = document.getElementById("project-link");
          projectLink.href = project.link;
  
          // couleur footer
          const footer = document.getElementById("dynamic-footer");
          footer.style.backgroundColor = project.colorBtnActive;
          footer.style.color = "white";

          // changement de la couleur du titre en fonction du projet actif
            const title = document.querySelector(".title");
            if (title) {
            title.style.color = project.colorBtnActive;
            }


        const links = document.querySelectorAll(".project-link");
        links.forEach(link => {

          // projet actif
          if (link.dataset.id === projectId) {
            link.style.backgroundColor = project.colorBtnActive; 
            link.style.color = "white"; 
          } else {
        // projets non actif 
            link.style.backgroundColor = project.color; 
            link.style.color = "white";
          }
        });
      }
    })
    .catch(error => console.error("Erreur lors du chargement des projets :", error));
});