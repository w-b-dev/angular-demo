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
        background-position: right;
        background-image: url(../../assets/x-men/X-Men_Vol_2_1_Full_Gatefold_Remastered_Cover--small.jpg);
        background-size: cover;
        background-attachment: fixed;
        background-blend-mode: lighten;
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
