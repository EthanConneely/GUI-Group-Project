let bodyHeight = document.getElementById("body").offsetHeight;
let viewportHeight = window.innerHeight;

offset = viewportHeight - bodyHeight + 20;
if (offset < 0)
{
    document.getElementById("footer").style.marginTop = "0px";
}
else
{
    document.getElementById("footer").style.marginTop = offset + "px";
}
