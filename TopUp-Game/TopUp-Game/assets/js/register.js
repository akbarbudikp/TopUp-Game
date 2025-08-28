// Ambil form register dari HTML
var formRegister = document.getElementById("registerForm");

// Tambahin fungsi ketika form di-submit
formRegister.addEventListener("submit", function(event) {
    // Supaya halaman tidak reload otomatis
    event.preventDefault();

    // Ambil nilai dari input form
    var inputNama = document.getElementById("name");
    var inputEmail = document.getElementById("email");
    var inputPassword = document.getElementById("password");

    var nama = inputNama.value;
    var email = inputEmail.value;
    var password = inputPassword.value;

    // Simpan data ke localStorage
    localStorage.setItem("namaUser", String(nama));
    localStorage.setItem("emailUser", String(email));
    localStorage.setItem("passwordUser", String(password));

    // Buat pesan sukses di layar
    var msg = document.createElement("p");
    msg.innerText = "✅ Akun berhasil dibuat! Anda akan diarahkan ke halaman login...";
    msg.style.color = "green";
    msg.style.fontWeight = "bold";
    document.querySelector(".form-container").appendChild(msg);

    // Delay 2 detik lalu pindah ke login.html
    setTimeout(function() {
        window.location.href = "login.html";
    }, 2000);
});
