import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WPRoutes } from './types/Wordpress';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  constructor(private httpClient: HttpClient) {
  }

  getAllRoutes() {
    return this.httpClient.get<WPRoutes>(environment.blog + 'v2');
  }

  filterMainEndpoints(): Array<string> {
    const results: Array<string> = [];
    this.getAllRoutes()
      .subscribe(response => {
        /* Note: https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
         * Both for..of and for..in statements iterate over lists;
         * the values iterated on are different though, for..in returns a list of keys on the object being iterated,
         * whereas for..of returns a list of values of the numeric properties of the object being iterated. */
        // Inspect every route and get the KEY
        for ( let route in response.routes ) {
          // Check suggested by TS compiler
          if ( response.routes.hasOwnProperty(route) ) {
            // console.log('Instance:', y);
            const routeFullSegment = route.split('/wp/v2/');
            // Check if there's actually any route -- because a[0] is always empty here
            if ( routeFullSegment[1] ) {
              // Splits the route in possibly multiple nested sections
              const routeRelevantSegment = routeFullSegment[1].split('/');
              // Get the first element (base route)
              route = routeRelevantSegment[0];
              // Check if values hasn't been added before
              if ( results.indexOf(route) === -1 ) {
                // Save the route in the array
                results.push(route);
              }
            }
          }
        }
      });
    return results;
  }
}
