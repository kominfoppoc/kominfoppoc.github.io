
// NAVIGASI WEB

document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.getElementById("opennavigasi");
    const closeButton = document.getElementById("closenavigasi");
    const sidebar = document.getElementById("sidebarnav");
    const menuheader = document.getElementById("menuheader");

    openButton.addEventListener("click", function() {
        sidebar.style.width = "200px";
    });

    closeButton.addEventListener("click", function() {
        sidebar.style.width = "0";
    });
});