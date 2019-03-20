import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Shared/blog.service';

@Component({
  selector: 'app-page-landing',
  template: `
    <section class="results-container">
      <article *ngFor="let result of results" class="single-result">
        {{ result }}
      </article>
    </section>
    <section class="result-details">
      <pre>{{results | json}}</pre>
    </section>
  `,
  styleUrls: ['page-landing.component.scss'],
})
export class PageLandingComponent implements OnInit {

  results: Array<string>;

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.consumeService();
  }

  consumeService() {
    this.results = this.blogService.filterMainEndpoints();
  }

}
