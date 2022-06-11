chrome.storage.local.set({'page' : {
    'data': 1
}}, ()=>{
    //the only source of truth
    console.log('page information has been stored to chrome storage');
})