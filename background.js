chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
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
});
