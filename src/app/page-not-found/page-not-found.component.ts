import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <article class="not-found">
        <div class="not-found--text">🤷‍️</div>
        <div class="not-found--text">Redirecting you in 3 seconds...</div>
    </article>
  `,
  styleUrls: ['page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
