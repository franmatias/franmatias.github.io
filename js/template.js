document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav__toggle");
  const navList = document.querySelector(".nav__list");

  navToggle.addEventListener("click", function () {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !isExpanded);
    navToggle.classList.toggle("is-active");
    navList.classList.toggle("is-visible");
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("is-visible");
      navToggle.classList.remove("is-active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
    // Botón Top
    const topButton = document.querySelector('.top-button');
    
    // Mostrar/ocultar botón basado en el scroll
    window.addEventListener('scroll', function() {
        // Mostrar botón después de 300px de scroll
        if (window.scrollY > 300) {
            topButton.classList.add('is-visible');
        } else {
            topButton.classList.remove('is-visible');
        }
    });
    
    // Funcionalidad de scroll suave al hacer clic
    topButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
