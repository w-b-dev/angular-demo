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
    console.info('Service calling ➖ Blog routes');
    return this.httpClient.get<WPRoutes>(environment.blog + 'v2');
  }
}
