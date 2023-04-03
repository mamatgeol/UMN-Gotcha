const startButton = document.querySelector('button');
const char1 = document.querySelector('.mySlides:nth-child(1) img');
const char2 = document.querySelector('.mySlides:nth-child(2) img');

startButton.addEventListener('click', () => {
    // Pindah ke halaman dapur.html
    window.location.href = 'dapur.html';

    // Simpan karakter yang dipilih ke dalam session storage
    if (char1.classList.contains('active')) {
        sessionStorage.setItem('selectedChar', 'char1');
    } else {
        sessionStorage.setItem('selectedChar', 'char2');
    }
});

