const sidebarVariable = document.querySelector(".sidebar");
const sidebarPictureVariable = document.querySelector(".sidebar-picture");

window.onresize = function(){
    let widthSidebarPictue = sidebarPictureVariable.width;
    sidebarVariable.style.width = widthSidebarPictue;
    console.log(widthSidebarPictue);
    console.log(sidebarVariable.style.width);
    console.log("end");
}