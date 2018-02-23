import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'hc-select-demo',
    templateUrl: './select-demo.component.html',
    styleUrls: [
        './select-demo.component.scss'
    ]
})
export class SelectDemoComponent {
    showTemplate: boolean = true;
    lastModified: Date = new Date( document.lastModified );

    viewToggle(show: 'ts' | 'html') {
        this.showTemplate = show === 'html';
    }
}