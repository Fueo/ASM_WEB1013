const listBanner = document.querySelector(".product-list-banner");
const Banners = document.getElementsByClassName("banner");
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
let current = 0;

const handleChangeSlide = () => {
    if (current == Banners.length - 1) {
        current = 0;
        let width = Banners[0].offsetWidth;
        listBanner.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.index-item-' + current).classList.add('active');
    }
    else {
        current++;
        let width = Banners[0].offsetWidth;
        listBanner.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.index-item-' + current).classList.add('active');
    }
}

let handleEventChangeSlideOnTime = setInterval(() => handleChangeSlide(), 5000)

btnRight.addEventListener('click', () => {
    clearInterval(handleEventChangeSlideOnTime);
    handleChangeSlide();
    handleEventChangeSlideOnTime = setInterval(() => handleChangeSlide(), 5000)
})

btnLeft.addEventListener('click', () => {
    clearInterval(handleEventChangeSlideOnTime);
    if (current == 0) {
        current = Banners.length - 1;
        let width = Banners[0].offsetWidth;
        listBanner.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.index-item-' + current).classList.add('active');
    }
    else {
        current--;
        let width = Banners[0].offsetWidth;
        listBanner.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.index-item-' + current).classList.add('active');
    }
    handleEventChangeSlideOnTime = setInterval(() => handleChangeSlide(), 5000)
})