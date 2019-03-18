import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Shared/blog.service';

@Component({
  selector: 'app-page-landing',
  template: `
    <ol>
      <li *ngFor="let result of results" class="result">{{ result }}</li>
    </ol>
  `,
  styles: [
      `
      :host {
        display: flex;
        height: 100%;
        background-color: antiquewhite;
      }

      .result {
        font-size: 0.7rem;
      }
    `,
  ],
})
export class PageLandingComponent implements OnInit {

  results = [];

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.consumeService();
  }

  consumeService() {
    this.blogService.getAllRoutes()
      .subscribe(x => {
        // Inspect every route
        for ( let y in x.routes ) {
          // Check suggested by TS compiler
          if ( x.routes.hasOwnProperty(y) ) {
            y = y.split('/wp/v2/');
            if ( y && y[1] && y[1].startsWith('posts', 0) ) {
              console.info('No good');
            }
            // Save the route in the array
            this.results.push(y[1]);
          }
        }
      });
  }

}
