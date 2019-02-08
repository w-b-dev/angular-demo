import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <a routerLink="landing" class="nav-link">Landing page</a>
      <a routerLink="other" class="nav-link">Other</a>
      <a routerLink="insistent" class="nav-link">Failed route</a>
    </nav>
  `,
  styles: [
      `
      nav {
        display: flex;
        justify-content: space-around;
        padding: 1rem;
        border-bottom: 2px solid white;
        background-color: #333;
      }

      .nav-link {
        padding: 0.5rem 2rem;
        border-radius: 4px;
        background-color: #333;
        color: white;
        font-weight: bold;
        text-decoration: none;
      }
    `,
  ],
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
