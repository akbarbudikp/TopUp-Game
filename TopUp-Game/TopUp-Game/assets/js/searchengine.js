document.addEventListener("DOMContentLoaded", function () {

    // Ambil elemen input, tombol, dan semua card game
    var input = document.getElementById("searchInput");
    var tombolCari = document.getElementById("searchBtn");
    var daftarGame = document.getElementsByClassName("game-list-card");

    // Fungsi pencarian
    function cariGame() {
        // Ambil kata yang diketik user
        var keyword = input.value.toLowerCase();

        // Untuk loop list game di ItemMu
        for (var i = 0; i < daftarGame.length; i++) {
            // Ambil judul game (tag <h3> di dalam card)
            var judul = daftarGame[i].getElementsByTagName("h3")[0].textContent.toLowerCase();

            // Cek  keyword ada di dalam judul game
            if (judul.indexOf(keyword) > -1) {
                daftarGame[i].style.display = "block"; // tampilkan
            } else {
                daftarGame[i].style.display = "none"; // sembunyikan jika bukan
            }
        }
    }

    // Saat tombol "Cari" ditekan
    tombolCari.addEventListener("click", function () {
        cariGame();
    });

    // Saat user mengetik langsung realtime
    input.addEventListener("keyup", function () {
        cariGame();
    });
});