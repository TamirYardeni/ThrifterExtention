$(document).ready(function () {
    document.getElementById('btn').addEventListener('click', function () {
        var owner = {
            "Email": document.getElementById('mailText').value,
            "Name": document.getElementById('nameText').value,
            "Place": document.getElementById('CityText').value,
            "Phone": document.getElementById('PhoneText').value
        };

        jQuery.ajax({
            type: "POST",
            url: "https://thrifter.azurewebsites.net/api/Owners",
            data: owner,
            dataType: "json",
            success: function (data) {
                console.log(data);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus); alert("Error: " + errorThrown);
            }
        });
    }
       );
});

