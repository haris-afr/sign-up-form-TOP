const sidebarVariable = document.querySelector(".sidebar");
const sidebarPictureVariable = document.querySelector(".sidebar-picture");

function setWidthSidebarBlock() {
    let widthSidebarPictue = sidebarPictureVariable.offsetWidth;
    sidebarVariable.style.width = widthSidebarPictue + "px";
        // console.log(widthSidebarPictue);
        // console.log(sidebarVariable.offsetWidth);
        // console.log("end");
}


window.onresize = function(){
    setWidthSidebarBlock();
}

window.onload = function(){
    setWidthSidebarBlock();
}
