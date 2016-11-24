import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TListComponent } from './tlist.component';
import { TListComponentDemo } from './tlist.component.demo';

import { 
    DynamicContentComponent, 
    DynamicSample1Component, 
    DynamicSample2Component, 
    UnknownDynamicComponent 
} from './dynamic-content.component';
import { DynamicContentComponentDemo } from './dynamic-content.component.demo';

import { RuntimeContentComponent } from './runtime-content.component';
import { RuntimeContentComponentDemo } from './runtime-content.component.demo';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        
        TListComponent, 
        TListComponentDemo,

        DynamicContentComponent, 
        DynamicSample1Component, 
        DynamicSample2Component, 
        UnknownDynamicComponent,
        DynamicContentComponentDemo,

        RuntimeContentComponent,
        RuntimeContentComponentDemo
    ],
    entryComponents: [
        DynamicSample1Component, 
        DynamicSample2Component, 
        UnknownDynamicComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }