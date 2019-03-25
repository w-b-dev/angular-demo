import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { WPRoutes } from './types/Wordpress';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  ENDPOINT_VERSION = '/wp-json/wp/v2';

  constructor(private httpClient: HttpClient) {
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

  filterSpecificEndpoint(specificRoute: string): Array<string> {
    const results: Array<any> = [];
    this.getSpecificRoute(specificRoute)
      .subscribe(response => {
        if ( typeof response[Symbol.iterator] === 'function' ) {
          // console.info('🔁' + specificRoute + '🔀 response is iterable');
          if ( typeof response !== 'string' && response.length !== 0 ) {
            /*TODO: check how to make response be recognized as iterable to avoid errors*/
            /*TS2488: Type '{}' must have a '[Symbol.iterator]()' method that returns an iterator.*/
            // @ts-ignore
            for ( const route of response ) {
              // console.log(route);
              results.push(route);
            }
          } else {
            response.length !== 0
              ? results.push(response)
              : results.push('Empty for now');
          }
        } else {
          // console.info('➡' + specificRoute + '⬅ response is not iterable');
          // console.table(response);
          results.push(response);
        }
      });
    return results;
  }

  private getAllRoutes() {
    return this.httpClient.get<WPRoutes>(environment.blog + this.ENDPOINT_VERSION);
  }

  private getSpecificRoute(specificRoute: string) {
    /*TODO: check how to process 400 status codes before crashing*/
    specificRoute = specificRoute.toLowerCase();
    if ( specificRoute === 'settings'
      || specificRoute === 'themes'
      || specificRoute === 'users'
      || specificRoute === 'block-renderer' ) {
      return new Observable<Array<any>>(x => x.next([specificRoute + ' requires authentication.']));
    } else {
      return this.httpClient.get<Array<any>>(environment.blog + this.ENDPOINT_VERSION + '/' + specificRoute);
    }
  }
}
