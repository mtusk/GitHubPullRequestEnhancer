var pullRequestFilePageUrlRegex = new RegExp('github[^\/]*\/[^\/]+\/[^\/]+\/pull\/[^\/]+\/files');

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === "complete" && pullRequestFilePageUrlRegex.test(tab.url)) {
        console.log("Background Script URL match!");
        chrome.tabs.executeScript(null, {file: "jquery-3.2.1.slim.min.js"});
        chrome.tabs.executeScript(null, {file: "contentscript.js"});
    }
});