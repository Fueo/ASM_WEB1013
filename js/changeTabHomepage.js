const tab1 = document.querySelector(".tab-index-1");
const tab2 = document.querySelector(".tab-index-2");
const tab3 = document.querySelector(".tab-index-3");
const tab4 = document.querySelector(".tab-index-4");
const tab5 = document.querySelector(".tab-index-5");


console.log(tab2);

tab1.addEventListener('click', () => {
    changeTab(1);
    tab1.classList.add("tab-active");
})

tab2.addEventListener('click', () => {
    changeTab(2);
    tab2.classList.add("tab-active");
})

tab3.addEventListener('click', () => {
    changeTab(3);
    tab3.classList.add("tab-active");
})

tab4.addEventListener('click', () => {
    changeTab(4);
    tab4.classList.add("tab-active");
})

tab5.addEventListener('click', () => {
    changeTab(5);
    tab5.classList.add("tab-active");
})

changeTab = (indexTab) => {
    document.querySelector(".tab-active").classList.remove("tab-active");
    document.getElementById("list-product-show").src = `list-product-${indexTab}.html`;
}