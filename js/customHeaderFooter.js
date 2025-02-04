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
                        <button class="dropbtn"> 
                        <img src="img/headericon3.png">
                        <div class="dropbtn-text">Danh mục sản phẩm</div>
                        </button>
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
                                <img src="img/headericon5.svg">Tìm kiếm
                            </a>
                        </button>
                    </form>
                    </div>
        
        <div class="right-content">
            <ul>
                <li><a href="login.html"><img src="img/headericon4.png">Đăng nhập/Đăng ký</a></li>
            </ul>
             <a href="checkout.html">
                <button class="btn">
                    <img src="img/headericon1.png">
                
                        <div>Giỏ hàng</div>
                        <div class="product-added">
                            0
                        </div>
                
                </button>
             </a>
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

                <h2 class="footer-subtitle">GIỚI THIỆU LAPTOP FUEO</h2>
                <hr class="footer-horizontal-line">
                <p class="footer-subtext">Về chúng tôi </p>
                    <p class="footer-subtext">Tư vấn mua hàng </p>
                    <p class="footer-subtext">Tuyển dụng</p>
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

                <h2 class="footer-subtitle">CHÍNH SÁCH CHUNG</h2>
                <hr class="footer-horizontal-line">
                <p class="footer-subtext">Chính sách trả góp</p>
                <p class="footer-subtext">Chính sách bảo vệ thông tin cá nhân</p>
                <p class="footer-subtext">Chính sách bảo hành</p>
                <p class="footer-subtext">Chính sách đổi - trả hàng</p>
                <p class="footer-subtext">Chính sách vận chuyển</p>
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
                    Tổng hợp khuyến mãi
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

                <h2 class="footer-subtitle">HỖ TRỢ KHÁCH HÀNG</h2>
                <hr class="footer-horizontal-line">
                <p class="footer-subtext">Tổng hợp Hotline CSKH, phản ánh.</p>
                <p class="footer-subtext">Lắp đặt phòng net</p>
                <p class="footer-subtext">Thiết bị Mining</p>
                <p class="footer-subtext">Tra cứu bảo hành</p>
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