document.getElementById("nutnhap").onclick = function(){
    //Đầu vào
    var nhapSO = document.getElementById("nhapso").value;

    //Xử lí
    var tinhTong = 0;
    var hangChuc = Math.floor(nhapSO / 10);
    var donvi = Math.floor(nhapSO % 10);
    tinhTong = hangChuc + donvi;
    result = "<p>Tổng 2 số là : "+ tinhTong +"</p>";

    // Đầu ra
    document.getElementById("showInfor").innerHTML = result;
}
