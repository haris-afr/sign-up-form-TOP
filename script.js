const sidebarVariable = document.querySelector(".sidebar");
const sidebarPictureVariable = document.querySelector(".sidebar-picture");

function setWidthSidebarBlock() {
    let widthSidebarPictue = sidebarPictureVariable.offsetWidth;
    sidebarVariable.style.width = widthSidebarPictue + "px";
        // console.log(widthSidebarPictue);
        // console.log(sidebarVariable.offsetWidth);
        // console.log("end");
}

const passwordInputField = document.querySelector("#user-password");
const confirmPasswordInputField = document.querySelector("#user-confirm-password");

confirmPasswordInputField.addEventListener('input', (e) => {
    let passwordVal = passwordInputField.value;

    if (passwordVal != confirmPasswordInputField.value){
        confirmPasswordInputField.setCustomValidity("Password fields are not the same");
    }
    else{
        confirmPasswordInputField.setCustomValidity("");
    }
})


window.onresize = function(){
    setWidthSidebarBlock();
}

window.onload = function(){
    setWidthSidebarBlock();
}

