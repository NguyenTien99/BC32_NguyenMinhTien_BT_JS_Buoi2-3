document.getElementById("nutnhap").onclick = function(){
    //Đâu đầu
    var tienUSD = document.getElementById("tienusd").value;
    //Xử lí
    var tienVND = tienUSD * 23500;
    var currentFormat = Intl.NumberFormat("vn-VN");
    var result = "<p>Tiền VND là : " + currentFormat.format(tienVND) + " vnd</p>";
    //Đầu ra
    document.getElementById("showInfor").innerHTML = result;
}