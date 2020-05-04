function taoDoiTuongItemGioHang(idSanPham, soLuong) {
    var itemGioHnag = new Object();
    itemGioHnag.idSanPham = idSanPham;
    itemGioHnag.soLuong = soLuong;

    return itemGioHnag;
}

function layGioHangTuLocalStorage() {
    var danhSachItemGioHang = new Array();
    /* Bước 1: lấy chuỗi json của danh sách item giỏ hàng lên */
    var jsonDanhSachItemGioHang = localStorage.getItem('gioHang')
    /* Bước 2: chuyển json thàng danh sách item giỏ hàng */
    if (jsonDanhSachItemGioHang != null) {
        danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);
    }
    return danhSachItemGioHang;
}

function themVaoGioHang(idSanPham, danhSachItemGioHang) {
    var danhSachItemGioHangSauKhiDuocThem = danhSachItemGioHang;
    /* Bước 1: tạo tối tượng item giỏ hàng */
    var itemGioHang = taoDoiTuongItemGioHang(idSanPham, 1);
    /* Bước 2: thêm item giỏ hàng vào danhSachItemGioHang */
    danhSachItemGioHangSauKhiDuocThem.push(itemGioHang);

    return danhSachItemGioHang;
}

function luuGioDoXuongLocalStorage(danhSachItemGioHang) {
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);
    localStorage.setItem('gioHang', jsonDanhSachItemGioHang);
}