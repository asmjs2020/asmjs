function taoDoiTuongSanPham(hinhAnh, ten, giaGoc, phanTramGiamGia, khuVuc, id) {
    var sanPham = new Object();
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    if(id == null){
        sanPham.id = taoId();
    }else{
        sanPham.id=id;
    }
    sanPham.giaSauKhiGiam = function () {
        giaSauKhiGiam = this.giaGoc * (100 - this.phanTramGiamGia) / 100;
        return giaSauKhiGiam;
    }
    sanPham.khuVuc = khuVuc;

    sanPham.toJson = function(){
        var json = JSON.stringify(this);
        return json;
    }

    sanPham.fromJSON = function(json){
        var sanPhamDayDu = new Object();
        var doiTuong = JSON.parse(json);
        var sanPhamDayDu = taoDoiTuongSanPham(doiTuong.hinhAnh, doiTuong.ten, doiTuong.giaGoc, doiTuong.phanTramGiamGia, doiTuong.khuVuc);
        return sanPhamDayDu;
    }
    return sanPham;
}

function chuyenDanhSachSanPhamThanhHTML(danhSachSanPham){
    /* bước 1: tạo vòng lặp duyệt tất cả phần tử trong mảng */
    /* bước 2: tạo ra đoạn html cho mỗi phần tử */
    /* bước 3: cộng chuỗi các đoạn html để tạo thành 1 đoạn html lớn bằng các html nhỏ*/
    var HTMLTong = '';
    for(var i = 0 ; i <danhSachSanPham.length ; i ++){
        var sanPham = danhSachSanPham[i];
        var HTML = chuyenDoiTuongSanPhamThanhHTML2(sanPham);
        HTMLTong =HTMLTong + HTML;
    }
    return HTMLTong

}

function chuyenDoiTuongSanPhamThanhHTML2(sanPham){
    var sanPham = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id);
    var HTML = '';
    HTML = HTML + "<div class='sanpham'>";
    HTML = HTML + "     <div class='hinhanh'>";
    HTML = HTML + "         <img src='" + sanPham.hinhAnh + "'>";
    HTML = HTML + "     </div>";
    HTML = HTML + "     <h1 class='tensanpham'>"+sanPham.ten +"</h1>";           
    HTML = HTML + "     <p class='giagocsanpham'>"+sanPham.giaGoc+"đ"+"</p>";  
    HTML = HTML + "     <P class='giasaukhigiam'>"+sanPham.giaSauKhiGiam()+"đ"+"</p>";
    HTML = HTML + "     <p class='khuvucban'>"+sanPham.khuVuc+" </p>";   
    HTML = HTML + "<button onclick = 'oclickDuaVaoGioHang("+ sanPham.id +")' class='btn'> Đưa vào giỏ hàng </button>";
    HTML = HTML + "</div>";
    return HTML;
}

function laySanPhamTheoID(idSanPham){
    var sanPham = new Object();
    var danhSachSanPham = layDanhSachSanPhamDuoiLocalStorage();
    for (var i = 0 ; i <danhSachSanPham.length ; i++){
        var sanPhamHienTai = danhSachSanPham[i];
        if(sanPhamHienTai.id == idSanPham){
            sanPham = sanPhamHienTai;
        }
    }
    sanPham = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id);
    return sanPham;
}

function layDanhSachSanPhamDuoiLocalStorage(){
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}