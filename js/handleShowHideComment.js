let isShowComment = false;
const reviewBtn = document.getElementsByClassName("review-btn")[0];
const askBtn = document.getElementsByClassName("ask-btn")[0];
let askCount = 0, reviewCount = 0;
const handleShowHideComment = () => {
    document.querySelector('.comment-write-group').style = `display: ${isShowComment ? "none" : "inline"}`;
    isShowComment = !isShowComment;
}

reviewBtn.addEventListener('click', () => {
    askCount = 0;
    reviewCount++;
    if (!isShowComment) {
        handleShowHideComment()
    }
    if (reviewCount == 2) {
        handleShowHideComment()
        reviewCount = 0;
    }
    document.querySelector('.comment-rating-group').style = `display: inline`;
    document.querySelector('.submit-btn').textContent = `Viết đánh giá`;
    document.querySelector('.submit-btn').classList.remove('ask')
    document.querySelector('.submit-btn').classList.add('review')
    document.querySelector('.comment-content-input').placeholder = `Viết nội dung đánh giá của bạn`
})


askBtn.addEventListener('click', () => {
    reviewCount = 0;
    askCount++;
    if (!isShowComment) {
        handleShowHideComment()
    }
    if (askCount == 2) {
        handleShowHideComment()
        askCount = 0;
    }
    document.querySelector('.comment-rating-group').style = `display: none`;
    document.querySelector('.submit-btn').textContent = `Đặt câu hỏi`;
    document.querySelector('.submit-btn').classList.remove('review')
    document.querySelector('.submit-btn').classList.add('ask')
    document.querySelector('.comment-content-input').placeholder = `Viết câu hỏi của bạn`
})