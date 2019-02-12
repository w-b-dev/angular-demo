import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <a routerLink="landing" routerLinkActive="active" class="nav-link">The good ones</a>
      <a routerLink="other" routerLinkActive="active" class="nav-link">Villains</a>
      <!--<a routerLink="insistent" routerLinkActive="active" class="nav-link">Time travel issues...</a>-->
    </nav>
  `,
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
