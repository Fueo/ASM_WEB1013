const calculate = (index) => {
    let row = document.querySelector(`.product${index}`);
    let priceElement = row.querySelector(".product-price");
    let quantityElement = row.querySelector(".product-quantity input");
    let quantityValue = parseInt(quantityElement.value, 10);
    let productPrice = parseInt(priceElement.textContent.replace(/[₫,]/g, ""), 10);
    let sum = quantityValue * productPrice;
    let formattedSum = sum.toLocaleString("en-US") + "₫";
    let sumElement = row.querySelector(".product-sum");
    sumElement.innerHTML = formattedSum;
    calculateTotalSum();
}

calculateTotalSum = () => {
    const productSumElements = document.querySelectorAll(".product-sum");
    let total = 0;
    productSumElements.forEach((element, index) => {
        let elementPrice = parseInt(element.textContent.replace(/[₫,]/g, ""), 10);
        total += elementPrice;
    });
    let formattedSum = total.toLocaleString("en-US") + "₫";
    document.querySelector(".sum-value").innerHTML = formattedSum;
}
