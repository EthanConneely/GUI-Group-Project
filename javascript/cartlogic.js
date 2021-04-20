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

	
	document.getElementById('BasketProductList').innerHTML = '';
	
	TitleTH = document.createElement('th');
	TitleTH.innerHTML = 'Product Name';
	document.getElementById('BasketProductList').appendChild(TitleTH);
	
	PriceTH = document.createElement('th');
	PriceTH.innerHTML = 'Product Price (Per Item)';
	document.getElementById('BasketProductList').appendChild(PriceTH);
	
	ImageTH = document.createElement('th');
	ImageTH.innerHTML = 'Product Image';
	document.getElementById('BasketProductList').appendChild(ImageTH);
	
	QuantityTH = document.createElement('th');
	QuantityTH.innerHTML = 'Product Image';
	document.getElementById('BasketProductList').appendChild(QuantityTH);

	RemoveTH = document.createElement('th');
	RemoveTH.innerHTML = 'Remove Item';
	document.getElementById('BasketProductList').appendChild(RemoveTH);
	
	SubTotal = 0;
	
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
			
			SubTotal = SubTotal + Number(Products[ProductNum][3].replace('€',''));
			

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
			RemoveButton.setAttribute('onclick', 'RemoveItem("' + ProductNum + '","' + Products[ProductNum][3] + '")');
			RemoveButton.innerHTML = 'X';

			FifthRowItem.appendChild(RemoveButton);
			Row.appendChild(FifthRowItem);
			

			document.getElementById('BasketProductList').appendChild(Row);
		}

        i++;
    }
	document.getElementById('CartSubTotal').innerHTML = 'Sub Total : €' + SubTotal;
}


function RemoveItem(Itemid,ItemPrice){
	
	const array = 	sessionStorage.getItem('cart').split(',');

	const index = array.indexOf(Itemid);
	if (index > -1) {
	  array.splice(index, 1);
	}
	
	sessionStorage.setItem('cart',array)
	
	document.getElementById('CartItem' + Itemid).remove();
	
	OldSubTotal = document.getElementById('CartSubTotal').innerHTML.split(':')[1];
	NewSubTotal = Number(OldSubTotal.replace('€','')) - Number(ItemPrice.replace('€',''));
	document.getElementById('CartSubTotal').innerHTML = 'SUB TOTAL : €'  + NewSubTotal;
}