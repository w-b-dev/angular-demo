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

  filterMainEndpoints(): Array<string> {
    let results: Array<string> = [];
    if ( localStorage.getItem('ALL_ROUTES') && localStorage.getItem('ALL_ROUTES').length > 0 ) {
      console.warn('Do not request again.', 'ALL_ROUTES');
      const response = JSON.parse(localStorage.getItem('ALL_ROUTES'));
      results = this.processResponse(response, results);
    } else {
      this.getAllRoutes()
        .subscribe(response => {
          localStorage.setItem('ALL_ROUTES', JSON.stringify(response));
          results = this.processResponse(response, results);
        });
    }
    return results;
  }

  filterSpecificEndpoint(specificRoute: string): Observable<Array<string>> {
    // let results: Promise<Array<string>>;
    if ( localStorage.getItem(specificRoute) && localStorage.getItem(specificRoute).length > 0 ) {
      console.info(`${ specificRoute }: ✔ Located in storage.`);
      const response = JSON.parse(localStorage.getItem(specificRoute));
      // const x = this.processObject(response);
      // return new Promise<Array<string>>((resolve) => resolve(response));
      return of(response);
      // results.then(y => console.log('y', y));
      // return results;
    } else {
      return this.getSpecificRoute(specificRoute);
        // .subscribe(response => {
        //   localStorage.setItem(specificRoute, JSON.stringify(response));
        //   // const x: Array<string> = this.processObject(response);
        //   console.info(`${ specificRoute }: 🆕 Saving into storage.`, response);
        //   // return new Promise<Array<string>>((resolve) => resolve(response));
        //   return of(response);
        //   // results.then(z => console.log('z', z));
        //   // return results;
        // });
    }
    // return results;
  }

  private processObject(response: Array<object>) {
    const results: Array<any> = [];
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
    return results;
  }

  // Double check syntax for optional argument
  private processResponse(response, results?) {
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

  private getAllRoutes() {
    return this.httpClient.get<WPRoutes>(environment.blog + this.ENDPOINT_VERSION);
  }

  private getSpecificRoute(specificRoute: string): Observable<Array<any>> {
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
}
