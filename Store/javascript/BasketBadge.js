window.setInterval(() => RefreshBadge(), 250);

if (sessionStorage.cart != undefined)
{
    RefreshBadge();
}


function RefreshBadge()
{
    let badge = document.getElementById("BasketBadge");
    badge.innerText = sessionStorage.cart.split(',').length;
    badge.style.display = "block";
}
