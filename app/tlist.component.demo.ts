import { Component } from '@angular/core';

@Component({
    selector: 'tlist-demo',
    template: `
        <div>
            <h2>Templated list</h2>
            <tlist [items]="items">
                <ng-template let-item="$implicit" let-i="index">
                    <li>[{{i}}] Hello: {{item.title}}</li>
                </ng-template>
            </tlist>
        </div>
    `
})
export class TListComponentDemo {
    items: any[] = [
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' }
    ];
}
