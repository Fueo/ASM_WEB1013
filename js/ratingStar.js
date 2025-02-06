const clearFillStar = () => {
    for (i = 1; i <= 5; i++) {
        document.querySelector(".s-index" + i).src = "img/detail-star1.png";
    }
}
let ratingChoice = 5;
const changeRatingStar = (index) => {
    clearFillStar();
    for (i = 1; i <= index; i++) {
        document.querySelector(".s-index" + i).src = "img/detail-star2.png";
    }
    ratingChoice = index;
}