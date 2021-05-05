//Logic for creating receipt
function CreateReceipt(){

    Receipt = 'Reciept for user session : ' + sessionStorage.getItem('Email') + '\n';
    Receipt = Receipt + 'CUSTOMER :  ' + document.getElementById('FnameInput').value + ' ' + document.getElementById('LnameInput').value + '\n';
    Receipt = Receipt + 'DELIVER TO :  ' + document.getElementById('ShippingAddressInput').value + '\n';
    ProductPrice = Number(document.getElementById('CartSubTotal').innerHTML.replace('Sub Total : €',''));
    OriginalPrice = ProductPrice + '';
    
    if(document.getElementById('TitleInput').value == '-- --'|| document.getElementById('FnameInput').value == '' || document.getElementById('LnameInput').value == '' || document.getElementById('CouponInput').value == '' || document.getElementById('ShippingAddressInput').value == ''){
        alert('Please Fill in all fields before finalizing purchase');
    }else{
        
        Receipt = Receipt + 'Products : \n'

        //list products#
        for(i = 0; i < document.getElementsByTagName('tr').length; i++){
            ItemName = document.getElementsByTagName('tr')[i].childNodes[0].innerHTML.replace('<p>','').replace('</p>','');
            ItemCost = document.getElementsByTagName('tr')[i].childNodes[1].innerHTML.replace('<p>','').replace('</p>','');

            Receipt = Receipt + 'ITEM : ' + ItemName + '. | '
            Receipt = Receipt + 'COST : ' + ItemCost + ' \n'
        }
        
        Receipt = Receipt + 'TOTAL  - - : ' + OriginalPrice + ' \n'

        if(document.getElementById('CouponInput').value !== ''){
            for(i = 0; i < CouponDetails.length; i++){
                if(CouponDetails[i].includes(document.getElementById('CouponInput').value)){
                    ProductPrice = ProductPrice - Number(CouponDetails[i][1]);
                    console.log('Your Coupon exists, with a value of €' + CouponDetails[i][1]);
                    Receipt = Receipt + 'COUPON CODE USED : ' + document.getElementById('CouponInput').value + ' ; VALUE OF €' + CouponDetails[i][1];
                    //Receipt = Receipt + 'COST AFTER COUPON REDUCTION :' + ProductPrice - Number(CouponDetails[i][1])
                }
            }
        }
    }

    document.getElementById('CartContainer').setAttribute('style','display:none;');

    ThanksMessage = document.createElement('H1');
    SubHeading = document.createElement('H2');
    ReceiptMessage = document.createElement('p');
    
    ThanksMessage.innerHTML = 'Thanks for your purchase';
    SubHeading.innerHTML = 'View your purchase below';
    ReceiptMessage.innerHTML = Receipt;

    document.getElementById('ReceiptContainer').appendChild(ThanksMessage);
    document.getElementById('ReceiptContainer').appendChild(SubHeading);
    document.getElementById('ReceiptContainer').appendChild(ReceiptMessage);

    //alert(Receipt);
    sessionStorage.removeItem('cart');
}