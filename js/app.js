const sidebar = document.querySelector('.sidebar');
const report = document.querySelector('.report');
const close = document.querySelector('.close');

const modalMasuk = document.querySelector('.masuk');
const modalKeluar = document.querySelector('.keluar');
const modalMasukOpen = document.querySelector('.modal-masuk');
const modalKeluarOpen = document.querySelector('.modal-keluar');
const closeModal = document.querySelectorAll('.close-modal');

document.addEventListener('DOMContentLoaded', () => {
    function openSidebar() {
        report.addEventListener('click', () => {
            sidebar.style.right = 0;
            sidebar.style.visibility = 'visible';
        })
    }
    
    function closeSidebare() {
        close.addEventListener('click', () => {
            sidebar.style.right = '-25vw';
            sidebar.style.visibility = 'hidden';
        })
    }
    
    function openModalMasuk() {
        modalMasuk.addEventListener('click', () => {
            modalMasukOpen.style.display = 'flex';
        })
    }

    function openModalKeluar() {
        modalKeluar.addEventListener('click', () => {
            modalKeluarOpen.style.display = 'flex';
        })
    }
    
    function closingModal() {
        for(let i = 0; i <= closeModal.length; i++) {
            closeModal[i].addEventListener('click', () => {
                modalMasukOpen.style.display = 'none';
            })
            
            closeModal[i].addEventListener('click', () => {
                modalKeluarOpen.style.display = 'none';
            })
        }
    }
    
    openSidebar();
    closeSidebare();
    openModalMasuk();
    openModalKeluar();
    closingModal();
})