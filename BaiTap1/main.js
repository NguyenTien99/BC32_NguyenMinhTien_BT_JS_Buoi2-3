/**
 * Đầu vào
 * - Tạo input để nhập sô tiền lương một ngày
 * - Tạo input để nhập số ngày
 * - Tạo một nút để nhấn hàm
 * Xử lí
 * - Gắn sự kiên onclick cho button
 * - Công thức tongLuong = tienLuong * soNgay
 * - Show kết quả ra ngoài màn hình
 * Đầu ra
 * - Tổng lương
 */
document.getElementById("button").onclick = function(){
    //Đầu vào
    var tienLuong = document.getElementById("tienluong").value;
    var soNgay = document.getElementById("songay").value;
    //Xử lí
    var tongLuong = tienLuong * soNgay;
    var currenFormat = new Intl.NumberFormat("vn-VN");
    var result = "<p>Số lương : " + currenFormat.format(tongLuong) + " vnd</p>";
    // Đầu ra
    document.getElementById("showInfor").innerHTML = result ;
}