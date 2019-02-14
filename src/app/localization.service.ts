import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

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
        navigator.geolocation.getCurrentPosition(this.getDecodedLocation.bind(this), this.handleError, {enableHighAccuracy: true});
    }

    getDecodedLocation(currentPosition): void {
        const pos = `${currentPosition.coords.latitude.toFixed(4)},${currentPosition.coords.longitude.toFixed(4)}`;
        console.info('🚀', pos);
        /* watch out for an binding issue / closure */
        this.composeURL(pos);
        this.callGoogle();
    }

    handleError(error): void {
        this.message = error;
        console.error(error);
    }

    composeURL(pos: string): void {
        const mapsKey = environment.mapsKey;
        this.URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos}&key=${mapsKey}`;
    }

    callGoogle() {
        if (this.URL !== '') {
            return this.httpClient.get(this.URL);
        } else {
            console.warn('🐉 There is no URL');
        }
    }


}
