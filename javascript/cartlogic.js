if(sessionStorage.getItem('Cart') == null){
	EmptyCartAlert = document.createElement('p');
	EmptyCartAlert.innerHTML = 'You have no products in your cart - return to home page to add products to cart.';
	EmptyCartAlert.setAttribute('id','EmptyCartAlert');
	document.getElementById('CartContents').appendChild(EmptyCartAlert);
}else{
	alert('Customer has products in cart.');
}