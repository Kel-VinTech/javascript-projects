
let formValidation = ()  => {
    // name valid
    var name = document.querySelector('.name');
    var fName = document.querySelector('.Fname');
    if(name.value == "") {
        name.nextElementSibling.style.display = "block";
        fName.style.border = "1px solid #f00";
        return false;
    
    }else {
        // fName.nextElementSibling.style.display = "none";
        fName.style.border = "1px solid transparent";
    }
    console.log(name.value)
}

