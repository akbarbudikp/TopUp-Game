document.addEventListener("DOMContentLoaded", function() {
    // Ambil semua link game
    const gameLinks = document.querySelectorAll(".game-list-card a");

    gameLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // stop default link dulu

            // Ambil status login dari localStorage
            const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

            if (isLoggedIn) {
                // Sudah login → langsung ke halaman game
                window.location.href = link.href;
            } else {
                // Belum login → arahkan ke register
                const confirmRegister = confirm(
                    "Kamu belum login. Apakah ingin membuat akun terlebih dahulu?"
                );
                if (confirmRegister) {
                    window.location.href = "register.html";
                } else {
                    // Kalau batal daftar, bisa arahkan ke login.html
                    window.location.href = "login.html";
                }
            }
        });
    });
});