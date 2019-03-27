import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../Shared/blog.service';

@Component({
  selector: 'app-page-landing',
  templateUrl: 'page-landing.component.html',
  styleUrls: ['page-landing.component.scss'],
})
export class PageLandingComponent implements OnInit {

  mainRoutesAvailable: Array<string>;
  resultSpecificRouteCall: Array<any>;
  endpoint: string;

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.mainRoutesAvailable = this.blogService.checkAllRoutesStorage();
  }

  /*TODO: in a future update, save selections to the Store for state management*/
  selectRoute(event: MouseEvent) {
    // TS suggestions to use the explicit type assertion 'as'
    const element: HTMLElement = event.target as HTMLElement;
    // Method to clear the active class to all but one element
    this.filterActiveClass(element);
    // Call the service to provide results.
    this.endpoint = element.innerText;
    if ( this.blogService.checkSpecificEndpointStorage(this.endpoint) !== undefined ) {
      this.blogService.checkSpecificEndpointStorage(this.endpoint)
        .subscribe(result => {
          console.log(`${this.endpoint} OK on 1st pass`);
          this.resultSpecificRouteCall = result;
        });
    } else {
      // Wait a whole second to retry loading from a slow SYNCHRONOUS local storage
      setTimeout(() => {
        this.blogService.checkSpecificEndpointStorage(this.endpoint)
          .subscribe(result => {
            console.log(`${this.endpoint} OK on 2nd pass`);
            this.resultSpecificRouteCall = result;
          });
      }, 1000);
    }
  }

  filterActiveClass(element: HTMLElement) {
    // Inspect all elements under the target's parent
    /*TODO: fix type checking warning*/
    // @ts-ignore
    for ( const parentElementKey of element.parentElement.childNodes ) {
      // If the element in the loop is the target, toggle active class
      if ( parentElementKey === element ) {
        element.classList.contains('active')
          ? element.classList.remove('active')
          : element.classList.add('active');
      } else {
        // If the element in the loop is NOT the target, remove active class
        if ( parentElementKey.classList && parentElementKey.classList.contains('active') ) {
          parentElementKey.classList.remove('active');
        }
      }
    }
  }

  clearStorage() {
    localStorage.clear();
    console.clear();
  }
}
