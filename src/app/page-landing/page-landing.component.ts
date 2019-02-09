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
      background-position: left;
      background-image: url(../../assets/x-men/X-Men_Vol_2_1_Full_Gatefold_Remastered_Cover--small.jpg);
      background-size: cover;
      background-attachment: fixed;
      background-blend-mode: lighten;
    }
  `]
})
export class PageLandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
