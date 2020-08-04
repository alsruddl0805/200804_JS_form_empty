function fnSbm() {
    var frm = document.getElementById("frm");
    var userId = document.getElementById("uId");
    var userPw = document.getElementById("uPw");
    var uId = userId.value;
    var uPw = userPw.value;
    var idChk = document.getElementById("idChk");
    var pwChk = document.getElementById("pwChk");

        if (uId == "") {
            idChk.innerText = "ID는 필수 입력 칸입니다.";
            userId.focus();
        } else if (uPw == "") {
            pwChk.innerText = "PW는 필수 입력 칸입니다.";
            userPw.focus();
        } else {
            frm.submit();
        }
}
