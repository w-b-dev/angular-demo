import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../localization.service';
import { GoogleMapsGeoCodingResponse } from '../types/GoogleMapsGeoCodingResponse';

@Component({
  selector: 'app-page-landing',
  template: `
    <section *ngIf="!country">
      <h3>Loading your location</h3>
      <div>
        <span class="anim a1">🏃‍♀️</span>
        <span class="anim a2">🏃</span>
      </div>
    </section>
    <h1 *ngIf="country">Your country: {{ country }}</h1>
    <hr/>
    <p>
      {{ GoogleMapsGeoCodingResponse | json }}
    </p>
  `,
})
export class PageLandingComponent implements OnInit {
  GoogleMapsGeoCodingResponse: GoogleMapsGeoCodingResponse;
  country: string;

  constructor(private localization: LocalizationService) {
  }

  ngOnInit() {
    this.localization.navigatorGeolocationGetCurrentPosition();

    setTimeout(this.getLocation.bind(this), 3000);
  }

  getLocation(): void {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    const lastElement = new RegExp('[a-zA-Z0-9]*$');
    // Matches the last word on the string ('country')
    if ( this.localization.callGoogle() !== undefined ) {
      this.localization.callGoogle()
        .subscribe(
          x => {
            this.GoogleMapsGeoCodingResponse = x;
            x
              ? ( this.country = lastElement
                  .exec(x.plus_code.compound_code)
                  .toString()
              )
              : alert('🤦‍♂️');
          },
          error1 => console.error(error1),
          () => null,
        );
    }
  }
}
