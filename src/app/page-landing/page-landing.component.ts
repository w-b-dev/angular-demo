import {Component, OnInit} from '@angular/core';
import {LocalizationService} from '../localization.service';

@Component({
    selector: 'app-page-landing',
    template: `
        <section *ngIf="!location">
            <h3>Loading your location</h3>
            <div>
                <span class="anim a1">🏃‍♀️</span>
                <span class="anim a2">🏃</span>
            </div>
        </section>
        <!--{{ time | async | json }}-->
        <h1 *ngIf="location">
            Your province: {{ location }}
        </h1>
    `,
    styles: [`
        .anim {
            position: absolute;
            font-size: 5rem;

            animation-name: running;
            animation-direction: alternate;
            animation-duration: 4s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-play-state: running;
            animation-timing-function: ease-in-out;

            /*transition-property: all;*/
            /*transition-duration: 4s;*/
            /*transition-timing-function: ease-in-out;*/
        }

        .a1 {
            right: 0;
            animation-delay: 0ms;
            /*transition-delay: 0ms;*/
        }

        .a2 {
            right: 100%;
            animation-delay: 1s;
            /*transition-delay: 1s;*/
        }

        @keyframes running {
            from {
                right: 0;
            }

            to {
                right: 100%;
            }
        }
    `]
})
export class PageLandingComponent implements OnInit {

    location;

    /*time;*/

    constructor(private localization: LocalizationService) {
    }

    ngOnInit() {
        /*this.getTime();*/
        this.localization.navigatorGeolocationGetCurrentPosition();

        setTimeout(this.getLocation.bind(this), 3000);
    }

    getLocation(): void {
        if (this.localization.callGoogle() !== undefined) {
            this.localization.callGoogle()
                .subscribe(
                    x => {
                        // console.info('🤦️', x);
                        x ? this.location = x.results[0].address_components[5].long_name : console.error('🤦‍♂️');
                    },
                    error1 => console.error(error1),
                    () => null);
        }
    }

    /*getTime(): void {
        this.time = new Observable<any>(
            (observer: Observer<any>) => {
                setInterval(() => {
                        const hour = new Date().getHours();
                        const min = new Date().getMinutes();
                        const sec = new Date().getSeconds();
                        const ms = new Date().getMilliseconds();
                        const full = {hour, min, sec, ms};
                        /!*sending an OBJECT*!/
                        observer.next(full);
                    },
                    100);
            });
    }*/

}
