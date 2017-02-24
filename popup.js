document.addEventListener('DOMContentLoaded', function () {
    const QR_CODE_SIZE = 300;
    var qrcode;
    var urlInput = $("#url-input");
    chrome.tabs.getSelected(null, function (tab) {
        makeCode(tab.url);
    })
    $("#generate-but").click(function () {
        makeCode(urlInput.val());
    });

    urlInput.keydown(function (e) {
        if (e.keyCode == 13) {
            makeCode(urlInput.val());
        }
    });

    function makeCode(url) {
        if (!url) {
            return;
        }
        console.log(url)
        if (!qrcode) {
            qrcode = new QRCode($("#qrcode")[0], {
                text: url,
                width: QR_CODE_SIZE,
                height: QR_CODE_SIZE
            });
        } else {
            qrcode.clear();
            qrcode.makeCode(url)
        }
        urlInput.val(url)
    }
});
