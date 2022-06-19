
async function swOnInstalled() {
    //prepares tab for onboarding the user to ask for permissions such as storage, activeTab, scripting
    chrome.tabs.create({
        //onboarding page of the extension presented to the user
        url: 'onboarding.html'
    })
}

async function actionClicked(tab) {
    //checks if tab url[] is not chrome extensions page or any google services
    if (tab.active == true) {
        //construct new URL
        currentUrl = new URL(tab.url);
        //check the origin or the url
        if (currentUrl.protocol !== "chrome:") {
            //copies the content script to the running page
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['content.js']
            });
        }
    }
}

async function messageListener(message, sender, postMessage) {
    //verifies if the message is display-results
    if (message == "display-results") {
        //creates a seo results tab to display the analysis
        chrome.tabs.create({
            url: "seo.html"
        })
    }
    return true;
}

//prepares an event on the SW for Installed service
chrome.runtime.onInstalled.addListener(swOnInstalled)
//listens for a action click on the chrome bar
chrome.action.onClicked.addListener(actionClicked);
//listens for a SW message
chrome.runtime.onMessage.addListener(messageListener)