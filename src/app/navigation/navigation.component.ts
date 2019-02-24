import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <a routerLink="" routerLinkActive="active" class="nav-link give-me-some-space" title="Homepage">Public site</a>
      <a routerLink="private" routerLinkActive="active" class="nav-link" title="Authenticated page">📈My Account</a>
      <a routerLink="login" routerLinkActive="active" class="nav-link" title="Login and Logout feature">🔐Logout</a>
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
