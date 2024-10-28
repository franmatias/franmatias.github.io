document.getElementById('menu-toggle').addEventListener('click', function() {
    var nav = document.getElementById('main-nav');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});