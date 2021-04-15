//JustForTestingPurposes
localStorage.setItem('Cart', '01,03,05');

if (localStorage.getItem('Cart') == null)
{
    EmptyCartAlert = document.createElement('p');
    EmptyCartAlert.innerHTML = 'You have no products in your cart - return to home page to add products to cart.';
    EmptyCartAlert.setAttribute('id', 'EmptyCartAlert');
    document.getElementById('CartContents').appendChild(EmptyCartAlert);
}
else
{
    BasketList = localStorage.getItem('Cart');
    console.log(BasketList.split(','));

    AmountOfProducts = BasketList.split(',').length;

    i = 0;
    while (BasketList.split(',')[i] != undefined)
    {
        //console.log(BasketList.split(',')[i]);
        b = 0;
        while (Products[b] != undefined){
            //console.log(Products[b][0] + ' ||| ' + BasketList.split(',')[i]);
            if (Products[b][0] == BasketList.split(',')[i])
            {
                console.log('Customer Bought ' + Products[b][2]);

                //Create image, title, description, price // append to BasketProductList

                Row = document.createElement('tr');

                RowItem = document.createElement('td');

                ProductTitle = document.createElement('p');
                ProductTitle.innerHTML = Products[b][2];

                RowItem.appendChild(ProductTitle);
                Row.appendChild(RowItem);
				
				
				SecondRowItem = document.createElement('td');

                ProductPrice = document.createElement('p');
                ProductPrice.innerHTML = Products[b][4];

                SecondRowItem.appendChild(ProductPrice);
                Row.appendChild(SecondRowItem);
				
				//Image of product
				
				ThirdRowItem = document.createElement('td');

                ProductImage = document.createElement('img');
                ProductImage.setAttribute('src',Products[b][1]);
                ProductImage.setAttribute('id','CartPreImage');

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
				RemoveButton.setAttribute('id','RemoveItemButton');
				RemoveButton.innerHTML = 'X';

                FifthRowItem.appendChild(RemoveButton);
                Row.appendChild(FifthRowItem);
				
                document.getElementById('BasketProductList').appendChild(Row);

            }
            b++;
        }
        i++;
    }
}
