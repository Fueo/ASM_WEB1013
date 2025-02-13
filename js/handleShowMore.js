const handleShowMore = () => {
    document.querySelector(".detail-description").style = `height: fit-content`;
    document.querySelector(".showmore").style = `display: none`;
}

let currentShowmore = 5;

const handleShowMoreProduct = () => {
    currentShowmore--;
    if (currentShowmore === 0) {
        document.querySelector(".btn-showmore").style = `display: none`;
    }
    document.querySelector(".product-content-show").insertAdjacentHTML("beforeend",
        `
        <div class="products mt-20">
                <div class="product">
                    <div class="product-img">
                        <div class="discount-percent">Giảm 30%</div>
                        <img src="img/laptop12.webp">
                    </div>
                    <a href="detail.html" class="product-title">Laptop Acer Aspire Go AG15-31P-32U6</a>
                    <div class="product-price">
                        <div class="discount-price">9,290,000₫</div>
                        <div class="original-price">15,500,000₫</div>
                    </div>
                    <div class="product-group-btn">
                        <button class="cart-btn" onclick="handleAddToCart()"><a><img src="img/product-1.svg"
                                    title='Thêm vào giỏ hàng'></a></button>
                        <button class="detail-btn"><a href="detail.html"><img src="img/product-2.svg"
                                    title='Xem chi tiết'></a></button>
                    </div>
                </div>
                <div class="product">

                    <div class="product-img">
                        <img src="img/laptop13.webp">

                    </div>
                    <a href="detail.html" class="product-title">Laptop HP ProBook 445 G11</a>
                    <div class="product-price">
                        <div class="discount-price">13,990,000₫</div>
                    </div>
                    <div class="product-group-btn">
                        <button class="cart-btn" onclick="handleAddToCart()"><a><img src="img/product-1.svg"
                                    title='Thêm vào giỏ hàng'></a></button>
                        <button class="detail-btn"><a href="detail.html"><img src="img/product-2.svg"
                                    title='Xem chi tiết'></a></button>
                    </div>
                </div>
                <div class="product">
                    <div class="product-img">
                        <img src="img/laptop11.webp">

                    </div>
                    <a href="detail.html" class="product-title">Laptop HP Pavilion 15 EG3095TU - 8C5L6PA
                        <div class="product-price">
                            <div class="discount-price">17,990,000₫</div>
                        </div>
                        <div class="product-group-btn">
                            <button class="cart-btn" onclick="handleAddToCart()"><a><img src="img/product-1.svg"
                                        title='Thêm vào giỏ hàng'></a></button>
                            <button class="detail-btn"><a href="detail.html"><img src="img/product-2.svg"
                                        title='Xem chi tiết'></a></button>
                        </div>
                </div>
                <div class="product">
                    <div class="product-img">
                        <img src="img/laptop15.webp">

                    </div>
                    <a href="detail.html" class="product-title">Laptop Acer Swift 3 SF313 53 518Y
                        (NX.A4JSV.003)</a>
                    <div class="product-price">
                        <div class="discount-price">15,500,000₫</div>
                    </div>
                    <div class="product-group-btn">
                        <button class="cart-btn" onclick="handleAddToCart()"><a><img src="img/product-1.svg"
                                    title='Thêm vào giỏ hàng'></a></button>
                        <button class="detail-btn"><a href="detail.html"><img src="img/product-2.svg"
                                    title='Xem chi tiết'></a></button>
                    </div>
                </div>
                <div class="product">
                    <div class="product-img">
                        <img src="img/laptop14.webp">
                    </div>
                    <a href="detail.html" class="product-title">Laptop Acer Swift Lite 14 AI SFL14 51M 56HS</a>

                    <div class="product-price">
                        <div class="discount-price">17,690,000₫</div>
                    </div>
                    <div class="product-group-btn">
                        <button class="cart-btn" onclick="handleAddToCart()"><a><img src="img/product-1.svg"
                                    title='Thêm vào giỏ hàng'></a></button>
                        <button class="detail-btn"><a href="detail.html"><img src="img/product-2.svg"
                                    title='Xem chi tiết'></a></button>
                    </div>
                </div>
        `
    )
}