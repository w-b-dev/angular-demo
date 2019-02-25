import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-other',
  template: `
    <article class="demo-article">
      📈
    </article>
  `,
  styles: [
      `
      :host {
        display: flex;
        height: 100%;
        background-color: cornflowerblue;
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
