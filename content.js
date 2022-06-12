class Page { 
    static title() { 
        if(!document.querySelector('title')){
            return ''
        }
        return document.querySelector('title').innerHTML;
    }
    static meta() { 
        if(!document.querySelector('meta[name=description]')){
            return ''
        }
        return document.querySelector('meta[name=description]').content
    }
    static keywords() {
        return 'customers, business, luxuxy'
    }
    static h1() {
        if(!document.querySelector('h1')) {
            return '';
        }
        return document.querySelector('h1').innerHTML 
    }
    static h2() {
        if(!document.querySelector('h2')) {
            return '';
        }
        return document.querySelector('h2').innerHTML 
    }
    static h3() {
        if(!document.querySelector('h3')) {
            return '';
        }
        if (typeof document.querySelectorAll('h3') === 'object') {
            return document.querySelectorAll('h3').length;
        }
    }
    static allLinks() {
        if (typeof document.querySelectorAll('a') === 'object') {
            return document.querySelectorAll('a');
        }
    }
    static allImgs() {
        if (typeof document.querySelectorAll('img') === 'object') {
            return document.querySelectorAll('img');
        }
    }
    
}

class Service { 
    static notify() { 
        /**
        * send message to the SW to display results
        */
        chrome.runtime.sendMessage('display-results', (response) => {
         
        })
    }
}

var DataSource = {
    title: Page.title(),
    meta: Page.meta(),
    keywords: Page.keywords(),
    h1: Page.h1(),
    h2: Page.h2(),
    h3: Page.h3(),
    a: Page.allLinks(),
    img: Page.allImgs()
};

Object.preventExtensions(DataSource);
Object.seal(DataSource);
Object.freeze(DataSource);

chrome.storage.local.set({page: DataSource}, Service.notify); 


 