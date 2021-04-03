function changeTheme() {
    document.getElementById("section").classList.toggle("dark-section");
    document.getElementById("header").classList.toggle("dark-image");
    var imageButton = document.getElementById("theme-button");
    var fullPath = imageButton.src;
    var index = fullPath.lastIndexOf("/");
    var fileName = fullPath.substring(index + 1, fullPath.length);
    if (fileName == "icon-moon.svg") {
        imageButton.src = "images/icon-sun.svg";
    } else {
        imageButton.src = "images/icon-moon.svg";
    }
}