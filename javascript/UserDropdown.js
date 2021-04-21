// This code is for showing a dropdown when the user clicks on the users logo in the top right of the screen (EC)
// code from https://www.w3schools.com/howto/howto_js_dropdown.asp
function showDropdown()
{
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it (EC)
// code from https://www.w3schools.com/howto/howto_js_dropdown.asp
window.onclick = function(event)
{
    if (!event.target.matches('.dropbtn'))
    {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++)
        {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show'))
            {
                openDropdown.classList.remove('show');
            }
        }
    }
}
