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
        while (ProductsList[b] != undefined)
        {
            //console.log(ProductsList[b][0] + ' ||| ' + BasketList.split(',')[i]);
            if (ProductsList[b][0] == BasketList.split(',')[i])
            {
                console.log('Customer Bought ' + ProductsList[b][2]);

                //Create image, title, description, price // append to BasketProductList

                Row = document.createElement('tr');

                RowItem = document.createElement('td');

                ProductTitle = document.createElement('p');
                ProductTitle.innerHTML = ProductsList[b][2];

                alert(ProductsList[b]);
                console.log(ProductsList[b]);

                RowItem.appendChild(ProductTitle);
                Row.appendChild(RowItem);
                document.getElementById('BasketProductList').appendChild(Row);

                //ProductImage = document.createElement('img');
                //ProductImage.setAttribute('src',ProductsList[b][1]);
            }
            b++;
        }
        i++;
    }
}
