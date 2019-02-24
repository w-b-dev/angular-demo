import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { GoogleMapsGeoCodingResponse } from './types/GoogleMapsGeoCodingResponse';

@Injectable({
    providedIn: 'root'
})
export class LocalizationService {
    URL = '';
    message = 'no message';

    constructor(private httpClient: HttpClient) {
    }

    navigatorGeolocationGetCurrentPosition(): void {
        /* watch out for an binding issue / closure */
        /* FIRST PARAMETER: A callback function that takes a Position object as its sole input parameter. */
        navigator.geolocation.getCurrentPosition(this.getDecodedLocation.bind(this));
    }

    getDecodedLocation(currentPosition: Position): void {
        /* watch out for an binding issue / closure */
        this.composeURL(currentPosition);
        this.callGoogle();
    }

    handleError(error): void {
        this.message = error;
        console.error(error);
    }

    composeURL(currentPosition: Position): void {
        // console.info('🚀', currentPosition);
        const pos = `${currentPosition.coords.latitude.toFixed(4)},${currentPosition.coords.longitude.toFixed(4)}`;
        // console.info('🚀🚀', pos);
        const mapsKey = environment.mapsKey;
        this.URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos}&key=${mapsKey}`;
    }

    callGoogle() {
        if (this.URL !== '') {
            return this.httpClient.get<GoogleMapsGeoCodingResponse>(this.URL);
        } else {
            console.warn('🐉 There is no URL');
        }
    }


}
