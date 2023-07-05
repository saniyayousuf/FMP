import { auth , signInWithEmailAndPassword } from "../config/firebaseconfig.js";


var userEmail = document.getElementById("useremail");
var userpassword = document.getElementById("userpassword");


window.login = function () {

    var object = {
        Email : userEmail.value,
        Password : userpassword.value,

    }

    console.log(object)
    signInWithEmailAndPassword( auth , object.Email, object.Password)
    .then((res) => {
        console.log(res.user)
        alert("login successfully")
    })
    .catch((err) => {
        console.log(err.user)
    })
}

