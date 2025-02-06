const reviewTab = document.getElementsByClassName("review-btn-tab")[0];
const askTab = document.getElementsByClassName("ask-btn-tab")[0];
const handleChangeTab = (type) => {
    if (type === 'review') {
        document.querySelector(".review-tab").style = `display: inline`;
        document.querySelector(".ask-tab").style = `display: none`;
        askTab.classList.remove('comment-active')
        reviewTab.classList.add('comment-active')
    }
    else {
        document.querySelector(".review-tab").style = `display: none`;
        document.querySelector(".ask-tab").style = `display: inline`;
        reviewTab.classList.remove('comment-active')
        askTab.classList.add('comment-active')
    }
}

reviewTab.addEventListener('click', () => {
    handleChangeTab('review');
})

askTab.addEventListener('click', () => {
    handleChangeTab('ask');
})