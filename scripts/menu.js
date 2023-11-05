const menuOpen = document.getElementById('menu_open');
const menuClose = document.getElementById('menu_close');
const menu = document.querySelector('nav');

window.addEventListener('resize', () => {
    if (window.innerWidth > 876) {
        menu.style.display = 'flex';
        document.body.classList.remove('no_scroll');
    } else {
        menu.style.display = 'none';
        document.body.classList.remove('no_scroll');
    }
})

function toggleMenu() {
    if(menu.style.display === 'flex'){
        menu.style.display = 'none';
        document.body.classList.remove('no_scroll');
    }
    else{
        menu.style.display = 'flex';
        document.body.classList.add('no_scroll');
    }
}

menuOpen.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);