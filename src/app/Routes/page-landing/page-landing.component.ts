import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Shared/blog.service';

@Component({
  selector: 'app-page-landing',
  templateUrl: 'page-landing.component.html',
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

  /*TODO: in a future update, save selections to the Store for state management*/
  setActive(event: MouseEvent) {
    // TS suggestions to use the explicit type assertion 'as'
    const element: HTMLElement = event.target as HTMLElement;
    element.classList.contains('active')
      ? element.classList.remove('active')
      : element.classList.add('active');
  }
}
