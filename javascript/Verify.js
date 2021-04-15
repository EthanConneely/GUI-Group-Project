//Javascript Verify Script
sessionStorage.setItem('username', 'Caolan');

if (sessionStorage.getItem("username") === null)
{
    alert('User is not logged in - redirecting to login page');
}
else
{
    document.getElementById('UsernameTag').innerHTML = 'Welcome, ' + sessionStorage.getItem('username');
}
