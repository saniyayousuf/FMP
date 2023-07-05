import {auth , createUserWithEmailAndPassword } from "../config/firebaseconfig.js" 



var name = document.getElementById("userName");
var email = document.getElementById("userEmail");
var password = document.getElementById("userPassword");



window.signup = function() {
    var obj = {
        name : name.value ,
        email : email.value,
        password : password.value,
    }
    console.log(obj)

    createUserWithEmailAndPassword(auth, obj.email , obj.password)
    .then((res)=> {
        console.log(res.user);
        alert("succecfully sign in")
    }) 
    .catch((err)=>
    {
        console.log(err)
    })
}