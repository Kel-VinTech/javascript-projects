// let PassId = document.querySelector('password');

let passGenerator = document.querySelector('.generate').addEventListener('click',generatePass)

function generatePass(e) {
    var chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*"; 
    var passLength = 12;
    var pass = "";

    for (var i = 0; i <= passLength; i++) {
        var randomPass = Math.floor(Math.random() * chars.length)
        pass += chars.substring(randomPass, randomPass+1);
    }
    document.getElementById('password').value = pass;
    console.log(pass);
}
 

let copyPasswod = document.querySelector('.copy').addEventListener('click',copyPass);
function copyPass(e) {
    copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0,999)
    document.execCommand("copy")
}

let showp = document.querySelector('.show').addEventListener('click',showPass);

function showPass () {
    var show = document.getElementById('password');
    if(show.type === "password") {
        show.type = "text";
        
    } else {
        show.type = "password";

    }

}