
let errorMessage = document.getElementById("error-message");

function validatepasswords(){
    let pass = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    console.log(pass + "- " + confirmPassword);
    if(pass != confirmPassword){
        errorMessage.style.opacity = 1;
        document.getElementById("password").style.borderColor = "#ff0000";
        document.getElementById("confirm-password").style.borderColor = "#ff0000";
    } else{
        errorMessage.style.opacity = 0;
        window.location.reload();
        alert("Thank you! Your data has been sent");
    }
}

