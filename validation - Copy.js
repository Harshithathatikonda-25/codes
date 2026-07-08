const form=document.getElementById("registrationForm");
form.addEventListener("submit",function(events){
event.preventDefault();
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmpassword=document.getElementById("confirmPassword");
const formStatus=document.getElemetById("formStatus");

usernameError.textContent="";
emailError.textContent="";
passwordError.textContent="";
confirmpasswordError.textContent="";
formStatus.textContent="";

let isValid=truee;
if(username.value.trim()===""){
usernameError.textContent="Username is required";
isValid=false;
}

const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if(!emailPattern.test(email.value.trim())){
emailError.textContent="Please enter a valid email address";
isValid=false;
}

if(password.value.length<6){
passwordError.textContent="password must be atleast 6 characters";
isValid=false;
}
id(password.value!==confirmPassword.value){
confirmPasswordError.textContent="password do not match";
is Valid=false;
}

if(isValid){
formStatus.textContent="form submitted successfully!";
}
});
