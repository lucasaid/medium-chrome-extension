// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        var elementTwitter = document.querySelector('meta[name="twitter:app:name:iphone"]');
        var contentTwitter = element && element.getAttribute("content");
        var elementIos = document.querySelector('meta[property="al:ios:app_name"]');
        var contentIso = element && element.getAttribute("content");
        var elementandroid = document.querySelector('meta[property="al:android:app_name"]');
        var contentandroid = element && element.getAttribute("content");
        var flag = false;
        if(contentTwitter === "Medium" || contentIso === "Medium" || contentandroid === "Medium"){
            flag = true;
        }

        sendResponse(flag);
    }
});
