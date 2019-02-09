import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <article class="not-found">
      <h1 class="not-found--text">Can't say for sure what happened... 🤷‍♀️</h1>
    </article>
  `,
  styles: [
      `
      :host {
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(../../assets/x-men/dark-phoenix--small.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }

      .not-found {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @keyframes not-found {
        from {
          opacity: 0.5;
          /*transform: scale(2.0)*/
        }
        to {
          opacity: 1;
          /*transform: scale(0.8) rotateY(360deg);*/
        }
      }

      .not-found--text {
        font-size: 3rem;
        padding: 1rem;
        text-align: center;
        text-shadow: 0 0 20px rgb(114, 114, 114);
        color: white;
        box-shadow: 0 0 20px 13px rgb(82, 59, 59);
        background-color: crimson;
        border-radius: 1rem;

        /*
        forwards - The element will retain the style values that is set by the last keyframe
        */
        animation-delay: 0ms;
        animation-direction: normal;
        animation-duration: 250ms;
        animation-fill-mode: forwards;
        animation-iteration-count: initial;
        animation-play-state: running;
        animation-timing-function: ease-in-out;
        animation-name: not-found;
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
