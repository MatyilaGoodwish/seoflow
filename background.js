//prepares an event on the SW for Installed service
chrome.runtime.onInstalled.addListener(()=> {
    //prepares tab for onboarding the user to ask for permissions such as storage, activeTab, scripting
    chrome.tabs.create({
        //onboarding page of the extension presented to the user
        url: 'onboarding.html'
    })
})

//listens for a action click on the chrome bar
chrome.action.onClicked.addListener((tab) => {
    //checks if tab url[] is not chrome extensions page or any google services
    if ( !tab.url.includes("chrome://") ) {
        //copies the content script to the running page
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content.js']
        });
    }
});

chrome.runtime.onMessage.addListener((message, sender, postMessage) => {
    //verifies if the message is display-results
    if (message == "display-results") {
        //creates a seo results tab to display the analysis
        chrome.tabs.create({
            url: "seo.html"
        })
    }
    return true;
})