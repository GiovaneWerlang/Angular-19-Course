import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective {
    appParam = input('myapp', { alias: 'appSafeLink' });
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor() {
        console.log('directive in use')
    }

    onConfirmLeavePage(event: MouseEvent) {
        const leave = window.confirm('Do you want to leave?');

        if(leave) {
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + '?from=' + this.appParam();
            return;
        }

        event?.preventDefault();
    }

}