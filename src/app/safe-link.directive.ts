import { Directive } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',

})
export class SafeLinkDirective {
    constructor() {
        console.log('directive in use')
    }

}