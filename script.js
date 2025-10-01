document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('open');
            });
        });
    }

    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });
    }

    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    if (carouselWrapper && prevBtn && nextBtn) {
        const scrollAmount = 320;

        nextBtn.addEventListener('click', () => {
            carouselWrapper.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            carouselWrapper.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
    }
});
gsap.from(".hero-content h1", { duration: 1.5, y: -50, opacity: 0, ease: "power3.out" });
gsap.from(".hero-content p", { duration: 1.5, y: 20, opacity: 0, delay: 0.5, ease: "power3.out" });
gsap.from(".btn-primary", { duration: 1, scale: 0.8, opacity: 0, delay: 1, ease: "back.out(1.7)" });

const stats = document.querySelectorAll(".stat-bar .fill");
window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.8;
    stats.forEach(stat => {
        const rect = stat.getBoundingClientRect();
        if(rect.top < trigger){
            stat.style.width = stat.getAttribute("style").match(/width:(.*?);/)[1];
        }
    });
});
