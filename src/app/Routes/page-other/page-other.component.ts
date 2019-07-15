import {Component} from '@angular/core';

@Component({
  selector: 'app-page-other',
  templateUrl: 'page-other.component.html',
  styleUrls: ['page-other.component.scss'],
})
export class PageOtherComponent {

  constructor() {
  }

  log($event: Event) {
    console.table($event);
  }
}
