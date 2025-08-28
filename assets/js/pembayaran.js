let cart = [];

function addToCart(name, price) {
    let userId = document.getElementById("userId").value
    let serverId = document.getElementById("server").value

    if (userId === "" || serverId === "") {
        alert("Silakan isi User ID dan Server ID sebelum memilih produk.");
    } else {
        alert("Produk berhasil dipilih!");
    }

    if (cart.some(item => item.name === name)) {
        alert("Item ini sudah dipilih.");
        return;
    }

    cart.push({ name, price });
    renderCart();

    let products = document.querySelectorAll(".product");
    products.forEach(product => {
        if (product.textContent.includes(name)) {
            product.classList.add("selected");
        }
    });
}

function renderCart() {
    let cartItems = document.getElementById("cartItems");
    let totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let li = document.createElement("li");
        li.textContent = `${item.name} - Rp${item.price.toLocaleString()}`;
        cartItems.appendChild(li);
        total += item.price;
    }

    totalPrice.textContent = `Rp${total.toLocaleString()}`;
}

function checkout() {
    let userId = document.getElementById("userId").value.trim();
    let server = document.getElementById("server").value.trim();

    if (userId.length > 10) {
        alert("Cek ulang ID: terlalu panjang (maksimal 10 karakter).");
        return;
    }

    if (server.length > 6) {
        alert("Cek ulang Server: terlalu panjang (maksimal 6 karakter).");
        return;
    }

    if (cart.length === 0) {
        alert("Keranjang masih kosong.");
        return;
    }

    alert("Pesanan berhasil diproses!");
}

let popupNotif = document.getElementById('popupNotif');
let saveButton = document.getElementById('saveAccount');
let userIdInput = document.getElementById('userId');
let serverInput = document.getElementById('server');
let savedId = document.querySelector('#savedId');
let savedServer = document.querySelector('#savedServer');

saveButton.addEventListener('click', function () {
    let userId = userIdInput.value.trim();
    let server = serverInput.value.trim();

    if (userId.length > 10 || server.length > 6) {
        alert('Periksa kembali: ID maksimal 10 karakter, Server maksimal 6 karakter.');
        return;
    }

    savedId.textContent = userId || '-';
    savedServer.textContent = server || '-';

    popupNotif.classList.add('show');

    setTimeout(() => {
        popupNotif.classList.remove('show');
    }, 3000);
});