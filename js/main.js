document.addEventListener('DOMContentLoaded', () => {
    //smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    //add scroll event listener for navbar styling
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        const updateNavbarState = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('is-scrolled');
            } else {
                navbar.classList.remove('is-scrolled');
            }
        };

        // Initial check
        updateNavbarState();
        
        window.addEventListener('scroll', updateNavbarState, { passive: true });
    }
});
