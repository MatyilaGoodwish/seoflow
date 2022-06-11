
chrome.runtime.onInstalled.addListener((tabs)=> {
    //onboarding load
    chrome.tabs.create({
        url: 'onboarding.html'
    })
})

//inject custom content script
chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes("chrome://")) {
        //output tab url
        console.log([tab.url])
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content.js']
        });
    }
});

chrome.runtime.onMessage.addListener((message, sender, postMessage) => {
    if (message == "get-page") {
        postMessage('done! page has been sent to you popup');
    }
    return true;
})