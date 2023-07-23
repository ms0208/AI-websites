document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    console.log("Manav");
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const target = document.querySelector(link.getAttribute('href'));
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            
            });
        });
    });
});
