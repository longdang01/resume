const navLinks = document.querySelectorAll('.nav-link');

// Navbar

navLinks.forEach((link) => {

    link.addEventListener('click', () => {
        document.querySelector('.nav-link.current-page').classList.remove('current-page');
        link.classList.add('current-page');
    })
})