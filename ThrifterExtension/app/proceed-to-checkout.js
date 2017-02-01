// Checking page title
if (document.title.indexOf("Amazon") != -1) {
    debugger;
    //Creating Elements
    //Creating Elements
    debugger;
    document.addEventListener('submit', function (e) {
        debugger;
        if (e.target.id == "gutterCartViewForm") {

            var arrayLength = document.getElementsByClassName('sc-list-body')[0].children.length;

            var items = [];
            for (var counter = 0; counter < arrayLength - 1; counter++) {
                var currItem = document.getElementsByClassName('sc-list-body')[0].children[counter];
                var itemName = currItem.getElementsByClassName('sc-product-title')[0].innerHTML;
                var itemPrice = currItem.getAttribute('data-price');
                var itemImage = currItem.getElementsByClassName('sc-product-image')[0].getAttribute('src')
                var cartItem = { 'name': itemName, 'price': itemPrice, 'imageLink': itemImage };
                items.push(cartItem);
            }

            var dataToSend = {
                "Email": "tamir.yardeni1@gmail.com",
                "Product": items
            };

            
        }  
    });
}