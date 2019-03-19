import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Shared/blog.service';

@Component({
  selector: 'app-page-landing',
  template: `
    <!--<section class="results-container">-->
      <article *ngFor="let result of results" class="single-result">{{ result }}</article>
    <!--</section>-->
  `,
  styles: [
      `
      :host {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        background-color: ghostwhite;
      }

      .single-result {
        font-size: 0.7rem;
        padding: 1rem;
        background-color: rgba(220, 20, 60, 0.5);
        margin: 1rem;
      }
    `,
  ],
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
    console.info('Consuming service.');
    console.info(this.results);
  }

}
