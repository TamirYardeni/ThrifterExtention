debugger;
// Checking page title
if (document.title.indexOf("Amazon") != -1) {
    //Creating Elements
    var div = document.createElement("DIV");
    div.id = "dialog-div";

    var btn = document.createElement("BUTTON")
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    
    btn.addEventListener('click', function (e) {

        alert('helllllllllllloooooooo');
        var s = '  <div class="alert alert-info"><strong>Info!</strong> Indicates a neutral informative change or action.</div>'; // HTML string
        
        div.innerHTML = s;
        //$("#dialog-div").load("./products-popup.html").dialog(open);
        /*$.post("product-popup.html", function (data) {

            $("#dialog-div").html(data).fadeIn();

        });*/
    });
    //Appending to DOM 
    document.getElementById("title_feature_div").appendChild(btn);
    document.getElementById("title_feature_div").appendChild(div);
}