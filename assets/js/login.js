// Ambil form login dari HTML
let formLogin = document.getElementById("loginForm");

// Tambahkan fungsi ketika form di-submit
formLogin.addEventListener("submit", function(event) {
    event.preventDefault(); // Supaya halaman tidak reload

    // Ambil nilai dari input
    let emailInput = document.getElementById("loginEmail").value;
    let passwordInput = document.getElementById("loginPassword").value;

    // Ambil data yang sudah disimpan di localStorage
    let emailTersimpan = localStorage.getItem("emailUser");
    let passwordTersimpan = localStorage.getItem("passwordUser");
    let namaUser = localStorage.getItem("namaUser");

    // Cek apakah email dan password sesuai
    if (emailInput === emailTersimpan && passwordInput === passwordTersimpan) {
        // Tampilkan pesan sukses di halaman
        let msg = document.createElement("p");
        msg.innerText = "🎉 Login berhasil, selamat datang " + namaUser + "!";
        msg.style.color = "green";
        msg.style.fontWeight = "bold";
        document.querySelector(".form-container").appendChild(msg);

        // Setelah 2 detik, arahkan ke index.html
        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000);
    } else {
        // Pesan error langsung tampil di halaman
        let msg = document.createElement("p");
        msg.innerText = "❌ Email atau password salah!";
        msg.style.color = "red";
        msg.style.fontWeight = "bold";
        document.querySelector(".form-container").appendChild(msg);
    }
});
