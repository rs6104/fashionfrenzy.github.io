const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}  

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
} 

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("emailInput");
    const signUpButton = document.querySelector("#newsletter button");
    const emailDisplay = document.querySelector("#newsletter .email-display");

    signUpButton.addEventListener("click", function () {
        const email = emailInput.value;

        if (isValidEmail(email)) {
            displayEmail(email);
        } else {
            alert("Please enter a valid email address.");
        }
    });
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
    function displayEmail(email) {
        emailDisplay.textContent = `You are subscribed with the email: ${email}`;
        emailInput.value = '';
    }
});
