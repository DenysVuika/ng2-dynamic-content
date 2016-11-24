import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <tlist-demo></tlist-demo>
      <dynamic-component-demo></dynamic-component-demo>
      <runtime-content-demo></runtime-content-demo>
  `,
})
export class AppComponent { }