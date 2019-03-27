import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { WPRoutes } from './types/Wordpress';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  ENDPOINT_VERSION = '/wp-json/wp/v2';

  constructor(private httpClient: HttpClient) {
  }

  /* FIRST BLOCK -- LOAD ALL THE MAIN ROUTES
    * Showcases the options available and builds the left side menu for navigation
    * */
  private getAllRoutes() {
    return this.httpClient.get<WPRoutes>(environment.blog + this.ENDPOINT_VERSION);
  }

  checkAllRoutesStorage(): Array<string> {
    let results: Array<string> = [];
    if ( sessionStorage.getItem('ALL_ROUTES') && sessionStorage.getItem('ALL_ROUTES').length > 0 ) {
      // console.warn('Do not request again.', 'ALL_ROUTES');
      const response = JSON.parse(sessionStorage.getItem('ALL_ROUTES'));
      results = this.processAllRoutesResponse(response, results);
    } else {
      this.getAllRoutes()
        .subscribe(response => {
          sessionStorage.setItem('ALL_ROUTES', JSON.stringify(response));
          // console.info('Saving response', response);
          results = this.processAllRoutesResponse(response, results);
        });
    }
    return results;
  }

  private processAllRoutesResponse(response, results): Array<string> {
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
    return results;
  }


  /* NOW FOR A SINGLE SPECIFIC ROUTE
   * This is where the tricky part starts
    * Some responses return an Array and some Object */

  private getSpecificEndpoint(specificRoute: string): Observable<Array<any>> {
    /*TODO: check how to process 400 status codes before crashing*/
    if ( specificRoute === 'Settings'
      || specificRoute === 'Themes'
      || specificRoute === 'Users'
      || specificRoute === 'Block-renderer' ) {
      return new Observable<Array<any>>(x => x.next([specificRoute + ' requires authentication.']));
    } else {
      return this.httpClient.get<Array<any>>(environment.blog + this.ENDPOINT_VERSION + '/' + specificRoute);
    }
  }

  checkSpecificEndpointStorage(specificRoute: string): Observable<Array<string>> {
    if ( sessionStorage.getItem(specificRoute) && sessionStorage.getItem(specificRoute).length > 0 ) {
      // console.info(`${ specificRoute } in storage ✔`);
      const response = JSON.parse(sessionStorage.getItem(specificRoute));
      return of(response);
    } else {
      this.getSpecificEndpoint(specificRoute)
        .subscribe(response => {
          sessionStorage.setItem(specificRoute, JSON.stringify(response));
          console.log(`🆕 Saving ${ specificRoute } into storage.`);
          return of(response);
        });
    }
  }

  /*private processSpecificEndpointResponse(response: Array<object>) {
    const results: Array<any> = [];
    if ( typeof response[Symbol.iterator] === 'function' ) {
      // console.info('🔁' + specificRoute + '🔀 response is iterable');
      if ( typeof response !== 'string' && response.length !== 0 ) {
        /!*TODO: check how to make response be recognized as iterable to avoid errors*!/
        /!*TS2488: Type '{}' must have a '[Symbol.iterator]()' method that returns an iterator.*!/
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
    return results;
  }*/
}
