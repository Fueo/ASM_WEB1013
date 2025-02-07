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
    let formattedDate = date.toLocaleDateString("en-GB");
    let commentStar = "";
    if (type === "review") {
        commentStar = changeCommentStar();
    }
    document.querySelector(`.${type}-tab`).insertAdjacentHTML("afterbegin",
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
    let Count = document.querySelector(`.${type}-count`).textContent * 1;
    document.querySelector(`.${type}-count`).innerHTML = `${Count + 1}`
}


const changeCommentStar = () => {
    let commentStar = "";
    for (i = 1; i <= ratingChoice; i++) {
        commentStar += `<img src = "img/detail-star2.png">`;
    }
    return commentStar;
}
