
function formValidation (e) {
   
    // name valid
    var name = document.querySelector('.name');
    var fName = document.querySelector('.Fname');
    if(name.value == "") {
        fName.style.border = "1px solid #f00";
        return false;
    
    }else {
        fName.style.border = "1px solid transparent";
    }

    // // // for email

    var email = document.querySelector('.email');
    var femail = document.querySelector('.femail');
    var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!email.value.match(mailformat)|| email.value == "") {
        femail.style.border = "1px solid #f00";
    }else {
        femail.style.border = "1px solid transparent";
    }

    // // // for phone number

    var phone = document.querySelector('.phone');
    var fphone = document.querySelector('.fphone');
    var phoneno = /^[\+]?[(]?[0-9]{2,3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(!phone.value.match(phoneno) || phone.value == "") {
        fphone.style.border = "1px solid #f00";
    }else {
        fphone.style.border = "1px solid transparent";
    }

    // // for password

    var password = document.querySelector('.password');
    var fpass = document.querySelector('.fpass');
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!password.value.match(decimal)|| password.value == "") {
        fpass.style.border = "1px solid #f00";
    }else {
        fpass.style.border = "1px solid transparent";
    }

    // // for password confirmation

    var confirm = document.querySelector('.confirm');
    var repass = document.querySelector('.repass');
    var conirmPass =  password.value;
    if(!confirm.value.match(conirmPass)|| confirm.value == "") {
        repass.style.border = "1px solid #f00";
    }else {
        repass.style.border = "1px solid transparent";
    }

    // // checkbox
    var checkbox = document.querySelector('.checkbox');   
    if(!checkbox.checked === true){
        alert('Please accept Terms & Conditions');
    }else{
        return false;
    }
    
}
// to show and hide password
let showp = document.getElementById('show').addEventListener('click',showPass);
function showPass () {
    var show = document.querySelector('.password');
    if(show.type === "password") {
        show.type = "text"; 
    } else {
        show.type = "password";
    }
}

// to show and hide confirmation password

let reshow = document.getElementById('reshow').addEventListener('click',reShowPass);
function reShowPass () {
    var show = document.querySelector('.confirm');
    if(show.type === "password") {
        show.type = "text"; 
    } else {
        show.type = "password";
    }
}