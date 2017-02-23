// // var qrcode = new QRCode(document.getElementById("qrcode"), "hellow");
// function onSelectionChanged(tabId) {
//     alert("xxx");
//     chrome.tabs.get(tabId, function (tab) {
//         alert(tab.url)
//         setCurrentUrl(tab.url);
//     });
// }
//
// function setCurrentUrl(url) {
//     $("#input").val(url)
//     // qrcode.clear();
//     // qrcode.makeCode(url);
// }
// console.log("xxx");
// chrome.tabs.onSelectionChanged.addListener(onSelectionChanged);


function onSelectionChanged(tabId) {
    chrome.tabs.get(tabId, function (tab) {
        setCurrentUrl(tab.url);
    });
}

var currentUrl = "";
function setCurrentUrl(url) {
    currentUrl = url;
}
chrome.tabs.onSelectionChanged.addListener(onSelectionChanged);

