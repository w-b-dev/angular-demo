import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../Shared/location.service';
import { GoogleMapsGeoCodingResponse } from '../../Shared/types/GoogleMapsGeoCodingResponse';

@Component({
  selector: 'app-page-other',
  templateUrl: 'page-other.component.html',
  styleUrls: ['page-other.component.scss'],
})
export class PageOtherComponent implements OnInit {
  GoogleMapsGeoCodingResponse: GoogleMapsGeoCodingResponse;
  country: string;

  constructor(private locationService: LocationService) {
  }

  ngOnInit() {
    // When loading, acquire browser location
    this.locationService.navigatorGeolocationGetCurrentPosition();
    // Wait to ask Google?
    setTimeout(this.getLocation.bind(this), 3000);
  }

  getLocation(): void {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    const lastElement = new RegExp('[a-zA-Z0-9]*$');
    // Matches the last word on the string ('country')
    if ( this.locationService.callGoogle() !== undefined ) {
      this.locationService.callGoogle()
        .subscribe(
          x => {
            this.GoogleMapsGeoCodingResponse = x;
            if ( x ) {
              this.country = lastElement
                .exec(x.plus_code.compound_code)
                .toString();
            }
          },
          error1 => console.error(error1),
          () => null,
        );
    }
  }
}
