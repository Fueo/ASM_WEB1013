const cartBtn = window.parent.document.querySelector(".product-added");

let addedCurrent = 0;

checkAdded = () => {
    if (addedCurrent == 0) {
        cartBtn.style = `display: none`;
    }
    else {
        cartBtn.style = `display: block`
    }
}

handleAddToCart = () => {
    addedCurrent++;
    cartBtn.innerHTML = `${addedCurrent}`;
    checkAdded();
}

checkAdded();
