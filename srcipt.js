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