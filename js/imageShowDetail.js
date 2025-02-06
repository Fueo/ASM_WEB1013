let current = 1;
const imageLists = document.getElementsByClassName("detail-image");
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

const handleChangeImage = (index) => {
    document.querySelector(".detail-image-preview").src = `img/detail-image${index}.webp`
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.detail-image-' + index).classList.add('active');
    current = index;
}

const handleChangeNextImage = () => {
    if (current >= imageLists.length) {
        current = 1;
    }
    else {
        current++;
    }
    handleChangeImage(current);
}

const handleChangePreviousImage = () => {
    if (current <= 1) {
        current = imageLists.length;
    }
    else {
        current--;
    }
    handleChangeImage(current);
}

btnRight.addEventListener('click', () => {
    handleChangeNextImage();
})

btnLeft.addEventListener('click', () => {
    handleChangePreviousImage();
})