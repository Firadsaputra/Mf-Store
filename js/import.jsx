// Fungsi untuk memuat form dari form.html ke index.html
function loadForm() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'form.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const formContainer = document.getElementById('formContainer');
            formContainer.innerHTML = xhr.responseText;
            
            // Setelah memuat form, tambahkan event listener ke tombol Tambah Produk
            const addProdukButton = document.getElementById('addProduk');
            addProdukButton.addEventListener('click', addProduk);
        }
    };
    xhr.send();
}

// Fungsi untuk menambahkan produk ke dalam daftar produk
function addProduk() {
    const namaProduk = document.getElementById('namaProduk').value;
    const linkProduk = document.getElementById('linkProduk').value;
    const imgSource = document.getElementById('imgSource').value;
    const nomorProduk = document.getElementById('nomorProduk').value;
    
    // Di sini Anda dapat menambahkan logika untuk menambahkan produk ke dalam daftar produk,
    // misalnya dengan menggunakan fungsi InputProduk() dari contoh sebelumnya.
    
    const place = document.getElementById("MainInput");
    place.appendChild(InputProduk(namaProduk, linkProduk, imgSource, nomorProduk));
}

// Fungsi untuk membuat elemen produk dalam format JSX
function InputProduk(nama, linkProduk, source, nomorProduk) {
    return (
        React.createElement("div", { className: "swiper-slide" },
            React.createElement("div", { className: "product-card position-relative" },
                React.createElement("div", { className: "image-holder" },
                    React.createElement("img", { src: source, alt: "product-item", className: "img-fluid" })
                ),
                React.createElement("div", { className: "cart-concern position-absolute" },
                    React.createElement("div", { className: "cart-button d-flex" },
                        React.createElement("a", { href: linkProduk, className: "btn btn-medium btn-black" },
                            "Add to Cart",
                            React.createElement("svg", { className: "cart-outline" },
                                React.createElement("use", { xlinkHref: "#cart-outline" })))))
                ),
                React.createElement("div", { className: "card-detail d-flex justify-content-between align-items-baseline pt-3" },
                    React.createElement("h3", { className: "card-title text-uppercase" },
                        React.createElement("a", { href: "#" }, nama)
                    ),
                    React.createElement("span", { className: "item-price text-primary" }, nomorProduk)
                )
        )
    );
}

// Panggil fungsi untuk memuat form saat dokumen di-load
document.addEventListener('DOMContentLoaded', loadForm);
