document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('.maps-scroll');
    const sections = document.querySelectorAll('.map-section');
    const navLinks = document.querySelectorAll('.sidebar a');

    scrollContainer.addEventListener('scroll', () => {
    let currentId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = scrollContainer.scrollTop;

        if (scrollY >= sectionTop - sectionHeight / 2) {
            currentId = section.id;
        }
    });

    navLinks.forEach(link => {
        const href = link.getAttribute('href').replace('#', '');
        link.classList.toggle('active', href === currentId);
    });
    });
});
