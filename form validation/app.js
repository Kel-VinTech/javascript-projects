
let formValidation = ()  => {
    // name valid
    // var name = document.querySelector('.name');
    // var fName = document.querySelector('.Fname');
    // if(name.value == "") {
    //     name.nextElementSibling.style.display = "block";
    //     fName.style.border = "1px solid #f00";
    //     return false;
    
    // }else {
    //     fName.style.border = "1px solid transparent";
    // }
    // console.log(name.value)


    // // for email
    var email = document.querySelector('.email');
    var femail = document.querySelector('.femail');
    var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!email.value.match(mailformat)|| email.value == "") {
        femail.style.border = "1px solid #f00";
    }else {
        femail.style.border = "1px solid transparent";
    }

    // for phone number
    var phone = document.querySelector('.phone');
    var fphone = document.querySelector('.fphone');
    var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(!phone.value.match(phoneno) || phone.value == "") {
        fphone.style.border = "1px solid #f00";
    }else {
        fphone.style.border = "1px solid transparent";
    }


    // for password
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;




    // // checkbox
    // var checkbox = document.querySelector('.input [type = "checkbox"]');
    // checkbox.addEventListener('change',  () => {
    //     if(checkbox.checked) {
    //         alert("Please accept terms and conditions")
    //     }
    // })
    
    // console.log("checkbox")
}

