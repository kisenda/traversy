//cara ke-2 Refactor

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('Email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//Show input error message
function showError(input, message ){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'

    const small = formControl.querySelector('small')
    small.innerText = message
}

//Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}


//Check email is valid
function checkEmail(input){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    if(re.test(input.value.trim())){
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}


//check required field
function checkRequired(inputArr) {
//yg mau di manipulasi adl input
    inputArr.forEach(function(input){
       // console.log(input.value); //ini mengakses sub dari addEventListener()
       // console.log(input.id);

        if(input.value.trim() === ''){    //trim for any white-space
            showError(input, `${getFieldName(input)} is required!`)
        } else {
            showSuccess(input)
        }
    });
}

// Check password match
function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Password do not match')
    }
}


//Get fieldName
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


//Check input length
function checkLength(input, min, max){
    
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} chart`)
    } else if (input.value.length > max ){
        showError(input, `${getFieldName(input)} must be less than ${max} chart`)
    } else {
        showSuccess(input)
    }
}



//Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault()

    console.log(e);

    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email)
    checkPasswordMatch(password, password2)
})