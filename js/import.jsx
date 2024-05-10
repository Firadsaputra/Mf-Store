function InputProduk(nama, linkProduk, source, nomorProduk) {
    return (
        <div class="swiper-slide">
            <div class="product-card position-relative">
                <div class="image-holder">
                    <img src={source} alt="product-item" class="img-fluid" />
                </div>
                <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                        <a href={linkProduk} class="btn btn-medium btn-black">Add to Cart<svg
                            class="cart-outline">
                            <use xlink:href="#cart-outline"></use>
                        </svg></a>
                    </div>
                </div>
                <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 class="card-title text-uppercase">
                        <a href="#">{nama}</a>
                    </h3>
                    <span class="item-price text-primary">{nomorProduk}</span>
                </div>
            </div>
        </div>
    );
}

const AddProduct = document.getElementById("addProduk");
AddProduct.addEventListener("click", function() {
    const namaProduk = document.getElementById("namaProduk").value;
    const linkProduk = document.getElementById("linkProduk").value;
    const imgLink = document.getElementById("imgSource").value;
    const nomorProduk = document.getElementById("nomorProduk").value;
    const place = document.getElementById("MainInput");
    place.appendChild(InputProduk(namaProduk, linkProduk, imgLink, nomorProduk));
});
