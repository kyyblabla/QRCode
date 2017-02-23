document.addEventListener('DOMContentLoaded', function () {
    var currentUrl = chrome.extension.getBackgroundPage().currentUrl;
    var qrcode = new QRCode(document.getElementById("qrcode"), currentUrl);
    $("#input").val(currentUrl)
});
