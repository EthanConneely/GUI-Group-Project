// refresh the badge so it is up to date (EC)
window.setInterval(() => RefreshBadge(), 250);

// Refresh the badge number (EC)
function RefreshBadge()
{
    // no need to show the badge if there is nothing added to the cart (EC)
    if (sessionStorage.cart != undefined)
    {
        let badge = document.getElementById("BasketBadge");
        badge.innerText = sessionStorage.cart.split(',').length;
        badge.style.display = "block";
    }
}
