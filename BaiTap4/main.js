document.getElementById("nutnhap").onclick = function(){
    //Đầu vào
    var chieuDai = document.getElementById("chieudai").value * 1;
    var chieuRong = document.getElementById("chieurong").value * 1;
    //Xử lí
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) / 2; 
    var result = "<div>";
    result += "<p> Diện tích : " + dienTich + "</p>";
    result += "<p> Chu vi : " + chuVi + "</p>";
    result += "</div>";
    //Đầu ra
    document.getElementById("showInfor").innerHTML = result;
}