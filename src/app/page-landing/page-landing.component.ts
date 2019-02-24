import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-landing',
  template: `
    <article class="demo-article">
      👍
    </article>
  `,
  styles: [`
    :host {
      display: flex;
      height: 100%;
      background-color: antiquewhite;
    }
  `]
})
export class PageLandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
