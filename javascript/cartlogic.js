//JustForTestingPurposes

if (sessionStorage.getItem('cart') == null)
{
    EmptyCartAlert = document.createElement('p');
    EmptyCartAlert.innerHTML = 'You have no products in your cart - return to home page to add products to cart.';
    EmptyCartAlert.setAttribute('id', 'EmptyCartAlert');
    document.getElementById('CartContents').appendChild(EmptyCartAlert);
}
else
{
    BasketList = sessionStorage.getItem('cart');
    AmountOfProducts = BasketList.split(',').length;
	
    i = 0;
    while(BasketList.split(',')[i] != undefined)
    {
		console.log(BasketList.split(',')[i]);
        
		ProductNum = BasketList.split(',')[i];
		
		if(ProductNum != undefined){
			
			Row = document.createElement('tr');
			Row.setAttribute('id','CartItem' + ProductNum);
			RowItem = document.createElement('td');

			ProductTitle = document.createElement('p');
			ProductTitle.innerHTML = Products[ProductNum][1];

			RowItem.appendChild(ProductTitle);
			Row.appendChild(RowItem);


			SecondRowItem = document.createElement('td');

			ProductPrice = document.createElement('p');
			ProductPrice.innerHTML = Products[ProductNum][3];

			SecondRowItem.appendChild(ProductPrice);
			Row.appendChild(SecondRowItem);

			//Image of product

			ThirdRowItem = document.createElement('td');

			ProductImage = document.createElement('img');
			ProductImage.setAttribute('src', Products[ProductNum][0]);
			ProductImage.setAttribute('id', 'CartPreImage');

			ThirdRowItem.appendChild(ProductImage);
			Row.appendChild(ThirdRowItem);

			//Quantity
			FourthRowItem = document.createElement('td');

			QuantityP = document.createElement('p');
			QuantityP.innerHTML = '1';

			FourthRowItem.appendChild(QuantityP);
			Row.appendChild(FourthRowItem);

			//RemoveButton
			FifthRowItem = document.createElement('td');

			RemoveButton = document.createElement('p');
			RemoveButton.setAttribute('id', 'RemoveItemButton');
			RemoveButton.setAttribute('onclick', 'RemoveItem("' + ProductNum + '")');
			RemoveButton.innerHTML = 'X';

			FifthRowItem.appendChild(RemoveButton);
			Row.appendChild(FifthRowItem);

			document.getElementById('BasketProductList').appendChild(Row);
		}

        i++;
    }
}


function RemoveItem(Itemid){
	
	const array = 	sessionStorage.getItem('cart').split(',');

	const index = array.indexOf(Itemid);
	if (index > -1) {
	  array.splice(index, 1);
	}
	
	sessionStorage.setItem('cart',array)
	
	document.getElementById('CartItem' + Itemid).remove();
}