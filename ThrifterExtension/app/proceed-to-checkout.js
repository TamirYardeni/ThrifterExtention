// Checking page title
if (document.title.indexOf("Amazon") != -1) {
    document.addEventListener('submit', function (e) {   
        if (e.target.id == "gutterCartViewForm") {

            var arrayLength = document.getElementsByClassName('sc-list-body')[0].children.length;

            var items = [];
            for (var counter = 0; counter < arrayLength; counter++) {
                var currItem = document.getElementsByClassName('sc-list-body')[0].children[counter];
                if (currItem.getElementsByClassName('sc-product-title')[0] != null) {
                    var itemName = currItem.getElementsByClassName('sc-product-title')[0].innerHTML;
                    var itemPrice = currItem.getAttribute('data-price');
                    var itemImage = currItem.getElementsByClassName('sc-product-image')[0].getAttribute('src')
                    var cartItem = { 'Name': itemName, 'Price': itemPrice, 'ImageLink': itemImage };
                    items.push(cartItem);
                }
            }

            var dataToSend = {
                "Email": "tamir.yardeni1@gmail.com",
                "Products": items
            };

            jQuery.ajax({
                type: "POST",
                url: "https://thrifter.azurewebsites.net/api/ProductOwnerships",
                data: dataToSend,
                dataType: "json",
                success: function (data) {
                    console.log(data);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus); alert("Error: " + errorThrown);
                }
            });

            alert('a');
        }  
    });
}