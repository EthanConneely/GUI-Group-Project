//Javascript Verify Script
if (localStorage.getItem("username") === null)
{
    alert('User is not logged in');
    location.href = 'login.html';
    //remove only logged in content
}
else
{
    let username = localStorage.getItem('username').charAt(0).toUpperCase() + localStorage.getItem('username').slice(1);

    document.getElementById('UsernameTag').innerHTML = 'Welcome, ' + username;
    document.getElementById('userDropdownMessage').innerHTML = 'You are logged in as ' + username;
    document.getElementById('UserTag').innerHTML = username[0];
}

//Logout Function
function LogoutFunction()
{
    localStorage.clear();
    location.href = 'login.html';
    //Verifying if user is logged in - if not sending them to login page
    if (sessionStorage.getItem("username") === null)
    {
        alert('User is not logged in - redirecting to login page');
        //window.location.href = '';
    }
    else
    {
        document.getElementById('UsernameTag').innerHTML = 'Welcome, ' + sessionStorage.getItem('username');
    }

    if (localStorage.getItem("username") === null)
    {
        alert('User is not logged in');
        location.href = 'login.html';
        //remove only logged in content
    }
    else
    {
        document.getElementById('UsernameTag').innerHTML = 'Welcome, ' + localStorage.getItem('username');
        document.getElementById('UserTag').innerHTML = localStorage.getItem('username')[0];
    }
}
