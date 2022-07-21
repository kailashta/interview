var optionObj = document.getElementById("options");
document.getElementById("hamber").onclick = function() {
    this.style.display = "none";
    optionObj.classList.add("open-nav");
    optionObj.style.display = "contents";
    optionObj.style.backgroundColor = "blue";
    document.getElementsByTagName("hr").display = "contents";

    document.getElementById("close").style.display = "contents";
    document.getElementById("logo").style.marginLeft = "-5%";

}

document.getElementById("close").onclick = function() {
    this.style.display = "none";
    optionObj.style.display = "none";
    optionObj.classList.remove("open");
    document.getElementById("hamber").style.display = "contents";

}

var profileObj = document.getElementById("sing-up");
var open = document.getElementById("profile");
var close = document.getElementById("profile-close");
open.onclick = function() {
    this.style.display = "none";
    close.style.display = "contents";
    profileObj.style.marginTop = "50px";
    profileObj.style.display = "block";

}

close.onclick = function() {
    this.style.display = "none";
    open.style.display = "contents";
    profileObj.style.display = "none";
}