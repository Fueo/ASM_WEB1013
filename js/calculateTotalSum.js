export function calculateTotalSum() {
    const productSumElements = document.querySelectorAll(".product-sum");
    let total = 0;
    productSumElements.forEach((element, index) => {
        let elementPrice = parseInt(element.textContent.replace(/[₫,]/g, ""), 10);
        total += elementPrice;
    });
    let formattedSum = total.toLocaleString("en-US") + "₫";
    document.querySelector(".sum-value").innerHTML = formattedSum;
}