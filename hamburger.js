var hamburgerButton = document.querySelector(".hamburger").addEventListener("click", openBtn);
var closeButton = document.querySelector(".closeBtn").addEventListener("click", closeBtn);

function openBtn() {
    var hamburger = document.querySelector(".hamburger");
    var sidebar = document.querySelector(".sidebar");
    sidebar.style.width = "15%";
    sidebar.style.transition = "width 0.5s";
}
function closeBtn() {
    var hamburger = document.querySelector(".hamburger");
    var sidebar = document.querySelector(".sidebar");
    sidebar.style.width = "0";
    sidebar.style.transition = "width 0.5s";
}