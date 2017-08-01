import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'tlist',
    template: `
        <ul>
            <ng-template ngFor [ngForOf]="items" [ngForTemplate]="template">
            </ng-template>
        </ul>
    `
})
export class TListComponent {

    @ContentChild(TemplateRef)
    template: TemplateRef<any>;

    @Input()
    items: any[] = [];

}
