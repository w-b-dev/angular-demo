import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-other',
  template: `
    <p>
      page-other works!
    </p>
  `,
  styles: [
      `
      :host {
        /*background-color: gray;*/
      }
    `,
  ],
})
export class PageOtherComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
