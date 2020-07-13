const overlay = document.getElementById('dropdown-nav');
const scroll = document.getElementById('cursor-btn');

function openMenu() {
    overlay.classList.add('slide');
};

function closeMenu() {
    overlay.classList.remove('slide');
};

function cursorBtn() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        scroll.style.display = 'block';
    } else {
        scroll.style.display = 'none';
    }
}


function sending() {
    alert("Send Succesfull!");
}