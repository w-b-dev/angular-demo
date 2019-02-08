import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-landing',
  template: `
    <p>
      page-landing works!
    </p>
  `,
  styles: [`
    :host {
      /*background-color: gray;*/
    }
  `]
})
export class PageLandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
