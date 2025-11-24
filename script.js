document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('main-nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = nav.querySelectorAll('a');

    if (menuToggle) {
        nav.classList.add('collapsed'); 

        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('collapsed');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (!nav.classList.contains('collapsed')) {
                    menuToggle.click();
                }
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        heroTitle.style.opacity = 0;
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 1s ease-in';
            heroTitle.style.opacity = 1;
        }, 300);
    }
});