const sidebar = document.querySelector('.sidebar');
const report = document.querySelector('.report');
const close = document.querySelector('.close');

function openSidebar() {
    report.addEventListener('click', () => {
        sidebar.style.right = 0;
    })
}

function closeSidebare() {
    close.addEventListener('click', () => {
        sidebar.style.right = '-27vw';
    })
}

openSidebar();
closeSidebare()