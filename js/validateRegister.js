let gmailInput = document.querySelector("#gmail-input").value;
let userInput = document.querySelector("#username-input").value;
let passwordInput = document.querySelector("#password-input").value;
let repasswordInput = document.querySelector("#re-password-input").value;
let eulaBtn = document.querySelector("#eula-btn"), value;

const validateRegister = () => {
    let isValidate = validateInput();
    if (isValidate) {
        alert("Bạn đã đăng ký thành công!");
        window.location.href = "login.html";
    }
}

const validateInput = () => {
    if (!gmailInput) {
        alert("Email không được để trống!");
        return false;
    }
    if (!userInput) {
        alert("Tên tài khoản không được để trống!");
        return false;
    }
    if (!passwordInput) {
        alert("Mật khẩu không được để trống!");
        return false;
    }
    if (!repasswordInput) {
        alert("Xác nhận mật khẩu không được để trống!");
        return false;
    }
    if (!(passwordInput === repasswordInput)) {
        alert("Xác nhận mật khẩu không trùng với mật khẩu đã nhập!");
        return false;
    }
    if (!eulaBtn.checked) {
        alert("Vui lòng đồng ý với điều khoản trang web!");
        return false;
    }

    return true;
}