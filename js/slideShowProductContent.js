const listProduct = document.querySelector(".products-4");
const Products = document.getElementsByClassName("product-4");
const ProductbtnLeft = document.querySelector('.btn-left-4');
const ProductbtnRight = document.querySelector('.btn-right-4');
let Productcurrent = 0;

console.log(listProduct, Products, ProductbtnLeft, ProductbtnRight);

const checkCurrent = () => {
    if (Productcurrent == 0) {
        ProductbtnLeft.style = `display: none`;
    }
    else {
        ProductbtnLeft.style = `display: block`;
    }
    if (Productcurrent == Products.length - 5) {
        ProductbtnRight.style = `display: none`;
    }
    else {
        ProductbtnRight.style = `display: block`;
    }
}

checkCurrent();

const handleChangeSlideProduct = () => {
    Productcurrent++;
    let width = Products[0].offsetWidth;
    listProduct.style.transform = `translateX(${(width * -1 * Productcurrent)}px)`
    checkCurrent();
}

ProductbtnRight.addEventListener('click', () => {
    handleChangeSlideProduct();
})

ProductbtnLeft.addEventListener('click', () => {
    Productcurrent--;
    let width = Products[0].offsetWidth;
    listProduct.style.transform = `translateX(${(width * -1 * Productcurrent)}px)`
    checkCurrent();
})