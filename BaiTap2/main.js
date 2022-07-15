/**
 * Đầu vào
 * - Tạo input và khai báo nhập số thứ 1
 * - Tạo input và khai báo  nhập số thứ 2
 * - Tạo input và khai báo  nhập số thứ 3
 * - Tạo input và khai báo  nhập số thứ 4
 * - Tạo input và khai báo  nhập số thứ 5
 * - Tạo nút nhấn để nhập dữ liệu mới chạy hàm
 * Xử lí
 * - Gắn sự kiên onclick cho button
 * - khai báo biến trungbinh = (số thứ 1 + số thứ 2 + số thứ 3 + số thứ 4 + số thứ 5)/5
 * - Show kết quả ra màn hình
 * Đầu ra
 * - Giá trị trung bình
 */
document.getElementById("nutNhap").onclick = function(){
    var soThu1 = document.getElementById("sothu1").value * 1;
    var soThu2 = document.getElementById("sothu2").value * 1;
    var soThu3 = document.getElementById("sothu3").value * 1;
    var soThu4 = document.getElementById("sothu4").value * 1;
    var soThu5 = document.getElementById("sothu5").value * 1;
    
    var trungbinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
    document.getElementById("showInfor").innerHTML = "<p>Giá trị trung bình là : " + trungbinh + "</p>";
}