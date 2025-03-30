import { Directive, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective {
    appParam = input('myapp', { alias: 'appSafeLink' });

    constructor() {
        console.log('directive in use')
    }

    onConfirmLeavePage(event: MouseEvent) {
        const leave = window.confirm('Do you want to leave?');

        if(leave) {
            const address = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href = address + '?from=' + this.appParam();
            return;
        }

        event?.preventDefault();
    }

}