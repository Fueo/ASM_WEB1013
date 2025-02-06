const handleSubmitComment = () => {
    let isValidated = validateComment();
    if (isValidated) {
        let type = document.querySelector('.submit-btn').classList[1];
        handleAddCommentToPage(type);
    }
    else {
        return;
    }
}

const validateComment = () => {
    let commentName = document.querySelector(".comment-name-content");
    let commentEmail = document.querySelector(".comment-email-content");
    let commentContent = document.querySelector(".comment-content-input");

    if (!commentName.value) {
        alert("Tên không được để trống!")
        return false;
    }
    if (!commentEmail.value) {
        alert("Email không được để trống!")
        return false;
    }
    if (!commentContent.value) {
        alert("Nội dung không được để trống!")
        return false;
    }

    return true;
}

const handleAddCommentToPage = (type) => {
    let commentName = document.querySelector(".comment-name-content").value;
    let commentEmail = document.querySelector(".comment-email-content").value;
    let commentContent = document.querySelector(".comment-content-input").value;
    let date = new Date();
    let formattedDate = date.toLocaleDateString("en-GB")
    if (type === "reviewBtn") {
        let commentStar = changeCommentStar();
        document.querySelector(".review-tab").insertAdjacentHTML("afterbegin",
            `<div class="comment-user-group">
                    <div class="flex" style="align-items: center; gap: 10px;">
                        <div class="comment-name">${commentName}</div>
                        <div class="comment-time">${formattedDate}</div>
                        <div class="comment-star">
                            ${commentStar}
                        </div>
                    </div>
                <div class="comment-content">${commentContent}
                </div>
            </div>`
        )
        let reviewCount = document.querySelector(".review-count").textContent * 1;
        document.querySelector(".review-count").innerHTML = `${reviewCount + 1}`
    }
    else {
        document.querySelector(".ask-tab").insertAdjacentHTML("afterbegin",
            `<div class="comment-user-group">
                    <div class="flex" style="align-items: center; gap: 10px;">
                        <div class="comment-name">${commentName}</div>
                        <div class="comment-time">${formattedDate}</div>
                    </div>
                <div class="comment-content">${commentContent}
                </div>
            </div>`
        )
        let askCount = document.querySelector(".ask-count").textContent * 1;
        document.querySelector(".ask-count").innerHTML = `${askCount + 1}`
    }
}


const changeCommentStar = () => {
    let commentStar = "";
    for (i = 1; i <= ratingChoice; i++) {
        commentStar += `<img src = "img/detail-star2.png">`;
    }
    return commentStar;
}
