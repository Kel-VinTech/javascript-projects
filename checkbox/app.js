const checkBoxes = document.querySelectorAll('.chk');
const selectcheck = document.querySelector('.select input[type="checkbox"]');
const unselect = document.querySelector('.unselect input[type="checkbox"]');


function select(e) {
    for(var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].type === 'checkbox') {
            checkBoxes[i].checked = true;
            unselect.checked = false;
        }
    }
}

function uncheck (e) {
   
    for (var i = 0; i < checkBoxes.length; i++) {
        if(checkBoxes[i].type === 'checkbox') {
            checkBoxes[i].checked = false;
            selectcheck.checked = false;
        }
    }
}

selectcheck.addEventListener('click', select);
unselect.addEventListener('click', uncheck);