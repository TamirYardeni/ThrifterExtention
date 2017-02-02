chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "install") {

        debugger;
        alert("This is a first install!");
        debugger;
        var div = document.createElement("DIV");
        div.id = "dialog-div1";

        var a = '<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'
            + '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
        '<h3 id="myModalLabel">Modal header</h3>' +
    '</div>'+
    '<div class="modal-body">'+
        '<p>One fine body…</p>'+
    '</div>'+
    '<div class="modal-footer">'+
        '<button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>'+
        '<button class="btn btn-primary">Save changes</button>'+
    '</div>'+
'</div>';
        debugger;
        div.innerHTML = a;
        document.body.appendChild(div);
        $('#myModal').modal('show');
    } else if (details.reason == "update") {
        var thisVersion = chrome.runtime.getManifest().version;

        alert("Updated from " + details.previousVersion + " to " + thisVersion + "!");
        chrome.tabs.create({ url: "sign.html" });
    }
});