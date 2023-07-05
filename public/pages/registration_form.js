import { Db, set , ref, push } from "../config/firebaseconfig.js";



var studentName =document.getElementById("stname");
var FatherName =document.getElementById("Ftname");
var studentCNIC =document.getElementById("stcnic");
var FatherCNIC =document.getElementById("ftcnic");
var EmailAddress =document.getElementById("email");
var PostalAddress =document.getElementById("Address");
var DOB =document.getElementById("DOB");
var PhNumber =document.getElementById("phNumber");
var lastQual =document.getElementById("LastQual");
var schoolName =document.getElementById("SchoolName");
var gender =document.getElementById("gender");


window.submit = function () {

    var obj = {
        studentName :studentName.value,
        FatherName : FatherName.value,
        studentCNIC :  studentCNIC.value,
        FatherCNIC  : FatherCNIC .value,
        EmailAddress : EmailAddress.value,
        PostalAddress : PostalAddress.value,
        DOB :  DOB.value,
        PhNumber : PhNumber.value,
        lastQual : lastQual.value,
        schoolName :  schoolName.value,
        gender : gender.value,

    }
    console.log(obj)

    var reference = ref(Db, 'cadidates/')
    set(reference, obj)
};