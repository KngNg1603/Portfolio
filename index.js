var prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
        let navbarToggler = document.querySelector('.navbar-toggler');
        if (!navbarToggler.classList.contains('collapsed')) {
            navbarToggler.click();
        }
    })
});