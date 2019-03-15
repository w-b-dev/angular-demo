import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <a routerLink="/" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active" class="nav-link give-me-some-space"
         title="Homepage">
        <span class="icon">🏠</span>
        <span class="description">Public site</span>
      </a>
      <a routerLink="private" routerLinkActive="active" class="nav-link" title="Authenticated page">
        <span class="icon">📈</span>
        <span class="description">My Account</span>
      </a>
      <a routerLink="login" routerLinkActive="active" class="nav-link" title="Login and Logout feature">
        <span class="icon">🚪</span>
        <span class="description">Logout</span>
      </a>
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
