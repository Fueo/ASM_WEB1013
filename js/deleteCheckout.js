
const deleteCheckout = (index) => {
    let row = document.querySelector(`.product${index}`);
    row.remove();
    calculateTotalSum2();
    checkProduct();
}

const checkProduct = () => {
    let row = document.querySelector(`.product`);
    if (!row) {
        document.querySelector(".checkout-content").innerHTML =
            `
            <div class="empty-content">
                <img src="img/checkout4.webp">
                <div class="empty-text">Không có sản phẩm nào trong giỏ hàng của bạn</div>
                <a href="index.html"><button class="btn-homepage">TIẾP TỤC MUA HÀNG</button></a>
            </div>`

        document.querySelector(".checkout-content").style = `display: inline`
    }
}

const calculateTotalSum2 = () => {
    const productSumElements = document.querySelectorAll(".product-sum");
    let total = 0;
    productSumElements.forEach((element, index) => {
        let elementPrice = parseInt(element.textContent.replace(/[₫,]/g, ""), 10);
        total += elementPrice;
    });
    let formattedSum = total.toLocaleString("en-US") + "₫";
    document.querySelector(".sum-value").innerHTML = formattedSum;
}
