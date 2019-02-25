import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation = trigger('routeTrigger', [
  /*TODO: Check how to handle initial page load with void status. Cryptic error message complains about :leave*/
  // transition('void => *', [
  //   query(':enter', []),
  //   query(':leave', []),
  // ]),
  // transition('* => void', [
  //   query(':enter', []),
  //   query(':leave', []),
  // ]),
  transition('private => public', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('180ms ease-in', style({ left: '100%' }))], {}),
      query(':enter', [animate('180ms ease-out', style({ left: '0%' }))], {}),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('login => public', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('180ms ease-in', style({ left: '100%' }))], {}),
      query(':enter', [animate('180ms ease-out', style({ left: '0%' }))], {}),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('login => private', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true },
    ),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('180ms ease-in', style({ left: '100%' }))], {}),
      query(':enter', [animate('180ms ease-out', style({ left: '0%' }))], {}),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('public => private', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
        }),
      ],
      { optional: true },
    ),
    query(':enter', [style({ right: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('180ms ease-in', style({ right: '100%' }))], {}),
      query(':enter', [animate('180ms ease-out', style({ right: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('public => login', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
        }),
      ],
      { optional: true },
    ),
    query(':enter', [style({ right: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('180ms ease-in', style({ right: '100%' }))], {}),
      query(':enter', [animate('180ms ease-out', style({ right: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('private => login', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
        }),
      ],
      { optional: true },
    ),
    query(':enter', [style({ right: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('180ms ease-in', style({ right: '100%' }))], {}),
      query(':enter', [animate('180ms ease-out', style({ right: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
