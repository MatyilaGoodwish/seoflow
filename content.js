class Service { 
    static notify() { 
        /**
        * send message to the SW to display results
        */
        chrome.runtime.sendMessage('display-results', (response) => {
            //some actions
        })
    }
}

/**
 * @params { CSS Selector }
 * @returns HTMLElment or object
 * */
function query(q) {
    if (typeof document.querySelectorAll(q) !== undefined) {
        //store the NodeList []
        var tempNodeList = document.querySelectorAll(q);
        if (tempNodeList.length > 0) {
            return tempNodeList;
        } else {
            return [{
                innerText: false,
                innerHTML: false,
                content: false
            }]
        }
    }  
}


var DataSource = {
    title: query("*>title")[0].innerText,
    description: query("*>meta[name=description]")[0].content,
    keywords: query("*>meta[name=keywords]")[0].content,
    h1: query("*>h1")[0].innerText,
    h2: query("*>h2")[0].innerText,
    h3: query("*>h3")[0].innerText,
    h4: query("*>h4")[0].innerText,
    url: location.origin
};

Object.preventExtensions(DataSource);
Object.seal(DataSource);
Object.freeze(DataSource);

chrome.storage.local.set({page: DataSource}, Service.notify); 


 