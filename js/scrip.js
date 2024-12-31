function toggleMenu() {
    const mobileMenu = document.querySelector('.nav-links-mobile');
    mobileMenu.classList.toggle('show');
}
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------*/
 // Variables
 const carouselImages = document.querySelector('.carousel-images');
 const indicators = document.querySelectorAll('.indicator');
 let currentSlide = 0;

 // Cambiar al siguiente slide
 function nextSlide() {
     currentSlide = (currentSlide + 1) % indicators.length;
     updateCarousel();
 }

 // Cambiar al slide anterior
 function prevSlide() {
     currentSlide = (currentSlide - 1 + indicators.length) % indicators.length;
     updateCarousel();
 }

 // Ir a un slide específico
 function goToSlide(slide) {
     currentSlide = slide;
     updateCarousel();
 }

 // Actualizar el carrusel
 function updateCarousel() {
     const offset = -currentSlide * 100; // Calcula el desplazamiento
     carouselImages.style.transform = `translateX(${offset}%)`;
     indicators.forEach((indicator, index) => {
         indicator.classList.toggle('active', index === currentSlide);
     });
 }

 // Auto-slide cada 5 segundos
 setInterval(nextSlide, 5000);