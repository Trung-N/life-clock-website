
function ExpandSubMenu() {
    document.getElementById("dropdown-content").classList.toggle("expand");
}
    
function ExpandMobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
    
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        if (document.getElementById("dropdown-content").classList.contains('expand')) {
            document.getElementById("dropdown-content").classList.remove("expand");
        }
    }
}