/**
 * AppComponent class
 */
export class AppComponent {
    /**
     * @var templateUrl loads template from the component directory
     * template lives in the AppComponent namespace.
     */
    templateUrl = "AppComponent/AppComponent.html"
    constructor() {}
    controller(){
        this.title = "SEO Flow";
        this.start = function () { 
            console.log('logged in again')
        }
    }  
}

