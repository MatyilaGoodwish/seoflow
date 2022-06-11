chrome.runtime.sendMessage('get-page', (response)=>{
    console.log(response);
    console.log('from the background')
})