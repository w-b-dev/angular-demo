import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1 class="not-found">🤷‍♀️</h1>
  `,
  styles: [
      `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .not-found {
        /*
        forwards - The element will retain the style values that is set by the last keyframe
        */
        font-size: 10rem;
        animation-delay: 0ms;
        animation-direction: normal;
        animation-duration: 500ms;
        animation-fill-mode: forwards;
        animation-iteration-count: initial;
        animation-play-state: running;
        animation-timing-function: ease-in-out;
        animation-name: not-found;
      }

      @keyframes not-found {
        from {
          opacity: 0.5;
        }
        to {
          opacity: 1;
          transform: scale(1.2) rotateY(360deg);
        }
      }
    `,
  ],
})
export class PageNotFoundComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
