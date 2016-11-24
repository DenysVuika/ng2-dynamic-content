import { Component, Input } from '@angular/core';
import { DynamicContentComponent } from './dynamic-content.component';

@Component({
    selector: 'dynamic-component-demo',
    template: `
        <div>
            <h2>Dynamic content</h2>
            <dynamic-content type="sample1" context="context1"></dynamic-content>
            <dynamic-content type="sample2" context="context2"></dynamic-content>
            <dynamic-content type="some-other-type" context="context3"></dynamic-content>
        </div>
    `
})
export class DynamicContentComponentDemo {
}