// index awal slide
let slideIndex = 0;

// ambil semua elemen slide, titik indikator, dan tombol
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

// fungsi untuk menampilkan slide berdasarkan nomor index
function showSlide(n) {
  // sembunyikan semua slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }

  // hapus "active" dari semua indikator
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // tampilkan slide sesuai index n
  slides[n].className += " active";
  dots[n].className += " active";
}

// fungsi untuk ke slide berikutnya
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0; // balik ke slide pertama
  }
  showSlide(slideIndex);
}

// fungsi untuk ke slide sebelumnya
function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1; // balik ke slide terakhir
  }
  showSlide(slideIndex);
}

// klik pada dot indikator
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    slideIndex = i;
    showSlide(slideIndex);
  });
}

// klik tombol next dan prev
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// otomatis jalan tiap 5 detik
setInterval(nextSlide, 5000);

// jalankan pertama kali agar slide[0] tampil
showSlide(slideIndex);
