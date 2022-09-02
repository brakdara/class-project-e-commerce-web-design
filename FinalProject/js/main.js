function sweet1() {
    Swal.fire(
        'Signed In!',
        'You signed in success!',
        'success')
}

function sweet2() {
    Swal.fire(
        'Try again',
        'You must fille out all of requirements!',
        'warning',
    )
}

function Form1() {
    var P = document.getElementById("pwdLogIn");
    let x = document.forms["myForm"]["mail"].value;
    let y = document.forms["myForm"]["pass"].value;
    if (x == "" || y == "") {
        sweet2();
        return false;
    }
    if (P.length < 8) {
        alert("No secure");
        return false;
    } else {
        sweet1();
        return false;
    }
}

function Form2() {
    let a = document.forms["MyForm"]["fName"].value;
    let b = document.forms["MyForm"]["lName"].value;
    let c = document.forms["MyForm"]["mail"].value;
    let d = document.forms["MyForm"]["user"].value;
    let e = document.forms["MyForm"]["regiPass"].value;
    let f = document.forms["MyForm"]["rPass"].value;
    if (a == "" || b == "" || c == "0" || d == "" || e == "" || f == "" || e != f) {
        sweet2();
        return false;
    } else {
        sweet1();
        return false;
    }
}
var upBtn = document.getElementById("upButton");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        upBtn.style.display = "block";
    } else {
        upBtn.style.display = "none";
    }
}
upBtn.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var buy = document.getElementsByClassName("buy-btn");

function toP1(){
    buy.addEventListener("click",window.location.href="product1.html");
}
function toP2(){
    buy.addEventListener("click",window.location.href="product2.html");
}

