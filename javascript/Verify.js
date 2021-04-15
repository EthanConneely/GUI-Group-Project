//Javascript Verify Script
//sessionStorage.setItem('username','Caolán is the best');

if (sessionStorage.getItem("username") === null) {
  alert('User is not logged in');
  location.href = 'login.html';
  //remove only logged in content
}else{
	document.getElementById('UsernameTag').innerHTML = 'Welcome, ' + sessionStorage.getItem('username');
}