function toggleMenu() {
    document.getElementById('primNav').classList.toggle('open');
};
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;