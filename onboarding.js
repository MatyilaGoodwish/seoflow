addEventListener('DOMContentLoaded', ()=> {
 
    //get the button
    const permissions = document.querySelector('.permissions');

    //ask user for permissions
    permissions.addEventListener('click', (e) => {
        var grant_permissions = [
            "scripting",
            "activeTab",
            "storage"
        ];
        chrome.permissions.request({ permissions: grant_permissions}, (granted) => {
            if (granted) {
                alert('Thank you permissions granted');
                window.close();
            } else {
                //doSomethingElse();
            }
        });
    });

})