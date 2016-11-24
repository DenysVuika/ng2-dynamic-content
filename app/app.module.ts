import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TListComponent } from './tlist.component';
import { TListComponentDemo } from './tlist.component.demo';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        TListComponent, 
        TListComponentDemo
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }