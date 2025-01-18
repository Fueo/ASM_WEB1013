class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="header-container">
        <div class="left-content">
            <a href="index.html" class="logo-content">
                <img src="img/logo.png" class="logo">
                <div class="logo-name">Laptop <strong>Fueo</strong></div>
            </a>
            <ul>
                <li>
                    <div class="dropdown">
                        <button class="dropbtn"> <img src="img/headericon3.png">Danh mục sản phẩm</button>
                        <div class="dropdown-content">
                            <a href="products.html">Laptop Văn phòng</a>
                            <a href="products.html">Laptop Đồ họa</a>
                            <a href="products.html">Laptop Gaming</a>
                            <a href="products.html">Phím, Chuột, Tai Nghe</a>
                            <a href="products.html">Camera, Webcam</a>
                            <a href="products.html">Phụ kiện & Phần mềm</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="search-group">
        <form >
                        <input type="text" placeholder="Nhập sản phẩm cần tìm...">
                        <button class="btn-search">
                            <a href="products.html">
                                <img src="img/headericon2.png">Tìm kiếm
                            </a>
                        </button>
                    </form>
                    </div>
        
        <div class="right-content">
            <ul>
                <li><a href="login.html"><img src="img/headericon4.png">Đăng nhập/Đăng ký</a></li>
            </ul>
            <button class="btn">
            <img src="img/headericon1.png">
            <div>Giỏ hàng</div>
            </button>
        </div>
    </nav>
        `
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer-container">
    <div class="footer-content">
        <div class="row">
            <div class="column">
                <div class="footer-title">
                    <img src="img/footer1.webp">
                    <div>
                        <h2>CHÍNH SÁCH GIAO HÀNG</h2>
                        <p>Nhận hàng và thanh toán tại nhà</p>
                    </div>
                </div>
                </br>

                <h2 class="footer-subtitle">GIỚI THIỆU LAPTOP FUEO</h2>
                <hr class="footer-horizontal-line">
                <p class="footer-subtext">Về chúng tôi </br>
                    Tư vấn mua hàng </br>
                    Tuyển dụng</p>
                <div class="icon-media">
                    <img src="img/footer8.png">
                    <img src="img/footer5.png">
                    <img src="img/footer7.png">
                    <img src="img/footer6.png">
                </div>
            </div>
            <div class="column">
                <div class="footer-title">
                    <img src="img/footer2.webp">
                    <div>
                        <h2>ĐỔI TRẢ DỄ DÀNG</h2>
                        <p>1 đổi 1 trong 7 ngày</p>
                    </div>
                </div>
                </br>

                <h2 class="footer-subtitle">CHÍNH SÁCH CHUNG</h2>
                <hr class="footer-horizontal-line">
                <p class="footer-subtext">
                    Chính sách trả góp</br>
                    Chính sách bảo mật</br>
                    Chính sách giải quyết khiếu nại</br>
                    Chính sách bảo vệ thông tin cá nhân</br>
                    Chính sách bảo hành</br>
                    Chính sách đổi - trả hàng</br>
                    Chính sách vận chuyển</br>
                </p>
            </div>

            <div class="column">
                <div class="footer-title">
                    <img src="img/footer3.webp">
                    <div>
                        <h2>GIÁ LUÔN LUÔN RẺ NHẤT</h2>
                        <p>Giá cả hợp lý, nhiều ưu đãi tốt</p>
                    </div>
                </div>
                </br>

                <h2 class="footer-subtitle">THÔNG TIN KHUYẾN MÃI</h2>
                <hr class="footer-horizontal-line">
                <p class="footer-subtext">
                    Tổng hợp khuyến mãi</br>
                </p>
            </div>
            <div class="column">
                <div class="footer-title">
                    <img src="img/footer4.webp">
                    <div>
                        <h2>HỖ TRỢ NHIỆT TÌNH</h2>
                        <p>Tư vấn, giải đáp mọi thắc mắc</p>
                    </div>
                </div>
                </br>

                <h2 class="footer-subtitle">HỖ TRỢ KHÁCH HÀNG</h2>
                <hr class="footer-horizontal-line">
                <p class="footer-subtext">
                    Tổng hợp Hotline CSKH, phản ánh. </br>
                    Lắp đặt phòng net </br>
                    Thiết bị Mining </br>
                    Tra cứu bảo hành</br>
                </p>
            </div>
        </div>
    </div>
</div>
<div style='background-color: black; text-align:center; color: white;'> Bản quyền footer và hình ảnh thuộc về tinhocngoisao.com <br>
Web được thiết kế và xây dựng bởi PS43509 Liêu Thiên Hạo lớp MD20301. Link Project: https://github.com/Fueo/Assignment_WebDevelopment</div>
`
    }
}

customElements.define(`my-header`, MyHeader);
customElements.define(`my-footer`, MyFooter);