let danhSachSanPham = ['hang1', 'hang2', 'hang3'];

function hienThiDanhSach() {
    let board = "<table border ='1' cellspacing = '0' >" +
        "<tr><td><b>STT</b></td><td><b>Tên sản phẩm</b></td><td></td><td></td></tr>";
    for (let i = 0; i < danhSachSanPham.length; i++) {
        stt = i + 1;
        board += '<tr><td>' + stt + '</td><td>' + danhSachSanPham[i] + '</td>' +
            '<td><button onclick="suaTen(' + i + ')">Sửa</button></td><td><button onclick="xoa(' + i + ')">Xóa</button></td></tr>';
    }
    board += '</table>';
    document.getElementById('hienThi').innerHTML = board;
}

function themSanPham() {
    let tenSanPham = document.getElementById('input').value;
    danhSachSanPham.push(tenSanPham);
    hienThiDanhSach();
}

function suaTen(i) {
    let tenMoi = prompt('nhập tên mới');
    danhSachSanPham[i]=tenMoi;
    hienThiDanhSach();
}

function xoa(i) {
    danhSachSanPham.splice(i,1);
    hienThiDanhSach();
}