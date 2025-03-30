import { Directive } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective {
    constructor() {
        console.log('directive in use')
    }

    onConfirmLeavePage(event: MouseEvent) {
        const leave = window.confirm('Do you want to leave?');

        if(leave) {
            return;
        }

        event?.preventDefault();
    }

}