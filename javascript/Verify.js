//Javascript Verify Script
//localStorage.setItem('username','Caolán is the best');

if (localStorage.getItem("username") === null) {
  alert('User is not logged in');
  location.href = 'login.html';
  //remove only logged in content
}else{
	document.getElementById('UsernameTag').innerHTML = 'Welcome, ' + localStorage.getItem('username');
	document.getElementById('UserTag').innerHTML = localStorage.getItem('username')[0];
}

//Logout Function
function LogoutFunction(){
	localStorage.clear();
	location.href = 'login.html';
}