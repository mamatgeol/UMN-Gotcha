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

<<<<<<< Updated upstream
var progressBar = $("div.progress-bar");
var x = 0;
var increment = function() {
  x = (x > 100) ? 0 : x + 1;
  progressBar.css('width', (x % 100) + '%');
};


window.setInterval(increment, 50);
=======
const params = new URLSearchParams(window.location.search);
const nama = params.get('nama');
>>>>>>> Stashed changes
