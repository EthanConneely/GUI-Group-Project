let relativePath = location.pathname.substr(0, (location.pathname).lastIndexOf('/') + 1);
if (relativePath == "")
{
    relativePath = location.pathname;
}

if (location.pathname.includes("index.html"))
{
    location.pathname = relativePath;
}


// Already logged in (EC)
if (sessionStorage.Email != null && sessionStorage.Password != null)
{
    // Already logged in redirect and on the login page redirect to store (EC)
    if (location.pathname == relativePath)
    {
        location.pathname = relativePath + "store.html";
    }
    else
    {
        // Captilize the first letter of the username (EC)
        var email = sessionStorage.Email.charAt(0).toUpperCase() + sessionStorage.Email.slice(1);

        var atsignLocation = email.indexOf("@");
        var username = email.substring(0, atsignLocation);

        var tag = document.getElementById('UsernameTag');

        // Add the name to the different elements (EC)
        tag.innerText = 'Welcome, ' + username;
        document.getElementById('userDropdownMessage').innerText = 'You are logged in as ' + username;

        // Add the first letter of the name to the user tag (EC)
        document.getElementById('UserTag').innerText = username[0];
    }
}
else
{
    // We are not logged in and we are not on the login page redirect to login page (EC)
    if (location.pathname != relativePath)
    {
        location.pathname = relativePath;
    }
}


// Forgot password button shows an alert (EC)
function forgotPassword()
{
    var message = "The accounts:\n";
    for (var i = 0; i < LoginDetails.length; i++)
    {
        // This just parses the array into a nice to read format
        message += LoginDetails[i].reverse().toString().replace(",", " for ") + "\n";
    }
    alert(message);
}

// Login to account (EC)
function login()
{
    var email = document.getElementById("Email");
    var password = document.getElementById("Password");
    var foundValidEmail = false;
    email.setCustomValidity("");
    password.setCustomValidity("");

    for (let i = 0; i < LoginDetails.length; i++)
    {
        if (LoginDetails[i][0] == email.value)
        {
            // Found email (EC)
            foundValidEmail = true;
            break;
        }
    }

    if (foundValidEmail)
    {
        var foundValidPassword = false;
        for (let i = 0; i < LoginDetails.length; i++)
        {
            if (LoginDetails[i][1] == password.value)
            {
                foundValidPassword = true;
                break;
            }
        }

        // We have the right detail save them and move them to the store (EC)
        if (foundValidPassword)
        {
            password.setCustomValidity("");
            email.setCustomValidity("");
            sessionStorage.setItem("Email", email.value);
            sessionStorage.setItem("Password", password.value);
            location.pathname = relativePath + "store.html";
            return;
        }
        else
        {
            password.setCustomValidity("Incorrect password for " + email.value);
        }
    }
    else
    {
        // Clear the password for "Security" (EC)
        password.value = "";
        email.setCustomValidity("This email is not in our database");
    }
}

// prevent the form from reloading the page (EC)
function submit(event)
{
    event.preventDefault();
}

// Logout of account (EC)
function logout()
{
    // Clear session and redirect to login page (EC)
    sessionStorage.clear();
    location.pathname = relativePath + "index.html";
}
