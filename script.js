const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordcheck = document.getElementById('passwordcheck');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordcheckValue = passwordcheck.value.trim();

    if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
     } else{
         setSuccessFor(username);
     }
     if(emailValue === ''){
        //show error
        //add error class
        setErrorFor(email, 'email cannot be blank');
     }else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not Valid  ')
     } else{
         setSuccessFor(email);
     }
     if(passwordValue === ''){
        //show error
        //add error class
        setErrorFor(password, 'Password cannot be blank');
     } else{
         setSuccessFor(password);
     }
     if(passwordcheckValue === ''){
        //show error
        //add error class
        setErrorFor(passwordcheck, 'password check cannot be blank');
     }else if(passwordValue !== passwordcheckValue){
         setErrorFor(passwordcheck, 'password does not notch')
     } else{
         setSuccessFor(passwordcheck);
     }
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error'; 
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase());
}
