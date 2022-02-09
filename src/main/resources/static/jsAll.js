
function scrollClick() {
    window.scrollTo(0, 0);
}

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".header-div").style.display = "none";
    document.querySelector(".icon-content").style.display = "none";
});

function introNext() {
    document.querySelector(".header-div").style.display = "flex";
    document.querySelector(".container").style.display = "block";
    document.querySelector(".loading").style.display = "none";
}