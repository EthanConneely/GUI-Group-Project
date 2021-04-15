//Javascript Verify Script

<<<<<<< Updated upstream
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
=======
//Verifying if user is logged in - if not sending them to login page
if (sessionStorage.getItem("username") === null) {
  alert('User is not logged in - redirecting to login page');
  //window.location.href = '';
}else{
	document.getElementById('UsernameTag').innerHTML = 'Welcome, ' + sessionStorage.getItem('username');
}

function LoginQuery(username,password){
	
	PossibleUsernames = ['caolanmichaelmaguire','irishbruise'];
	
	UserCredentials = {
		'caolanmichaelmaguire' : 'password123',
		'irishbruise' : 'password1234'
	}
	
	if(PossibleUsernames.includes(username)){
		//if(UserCredentials[username]){
		//}
	}
	
>>>>>>> Stashed changes
}