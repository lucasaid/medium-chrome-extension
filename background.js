chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    if (tab.url.indexOf("https://medium") != -1 || tab.url.indexOf("http://medium.") != -1) { // Inspect whether the place where user clicked matches with our list of URL
        chrome.tabs.executeScript(tab.id, {
            "file": "jquery.slim.min.js"
        }, function () { // Execute your code
            console.log("Script Executed .. "); // Notification on Completion
        });
        chrome.tabs.executeScript(tab.id, {
            "file": "medium.js"
        }, function () { // Execute your code
            console.log("Script Executed .. "); // Notification on Completion
        });

    }
});
