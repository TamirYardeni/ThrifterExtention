debugger;

function getProductList (name){
    return [{ OwnerName: 'Noa Segal', Place: 'Raanana', Price: 150, ProductName: 'Something similar', ImageLink: 'https://images-na.ssl-images-amazon.com/images/I/71J87MhGpgL._SL1200_.jpg' },
        { OwnerName: 'Tamir Yardeni', Place: 'Ramat Gan', Price: 130, ProductName: 'same same', ImageLink: 'https://images-na.ssl-images-amazon.com/images/I/61f6HIQhAML._SL1114_.jpg' },
        { OwnerName: 'Jon Berg', Place: 'Kiryat Ono', Price: 145, ProductName: 'same same', ImageLink: 'https://images-na.ssl-images-amazon.com/images/I/61f6HIQhAML._SL1114_.jpg' },
        { OwnerName: 'Or Daniel', Place: 'Ramat Gan', Price: 150, ProductName: 'almost like', ImageLink: 'https://images-na.ssl-images-amazon.com/images/I/71RltLIcQiL._SL1440_.jpg' }
    ];
}

// Checking page title
if (document.title.indexOf("Amazon") != -1) {
    //Creating Elements
    var div = document.createElement("DIV");
    div.id = "dialog-div";

    var btn = document.createElement("BUTTON")
    var t = document.createTextNode("CLICK ME");
    btn.setAttribute("type", "button")
    btn.classList.add("btn")
    btn.classList.add("btn-info")
    btn.classList.add("btn-lg")
    btn.setAttribute("data-toggle", "modal")
    btn.setAttribute("data-target", "#myModal")
    btn.appendChild(t);
    var json;
    btn.addEventListener('click', function () {
        $('#productstable').empty();
        json = getProductList('the name of the product');
        $.each(json, function (key, value) {
            var $tr = $('<tr>').append(
                $('<td>').prepend('<img src="'+value.ImageLink+'" />'),
                    $('<td>').text(value.OwnerName),
                    $('<td>').text(value.Place)
                ); //.appendTo('#records_table');
            $('#productstable').append($tr);
        });
    })
    var a = '<div id="myModal" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Thrifter Products</h4></div><div class="modal-body"><p>Some text in the modal.</p>' +
     '<table id="productstable"></table>' +
     '</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>'
    div.innerHTML = a;

    //btn.addEventListener('click', function (e) {

    //    alert('helllllllllllloooooooo');
    //    var s = '  <div class="alert alert-info"><strong>Info!</strong> Indicates a neutral informative change or action.</div>'; // HTML string
        
    //    //$("#dialog-div").load("./products-popup.html").dialog(open);
    //    /*$.post("product-popup.html", function (data) {

    //        $("#dialog-div").html(data).fadeIn();

    //    });*/
    //});
    //Appending to DOM 
    document.getElementById("title_feature_div").appendChild(btn);
    document.getElementById("title_feature_div").appendChild(div);
}