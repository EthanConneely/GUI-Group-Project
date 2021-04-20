let badge = document.getElementById("BasketBadge");

if (sessionStorage.cart != undefined)
{
    badge.innerText = sessionStorage.cart.split(',').length;
    badge.style.display = "block";
}
