import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  response = [];
  // TODO: Source data from API call
  source = ['requestAnimationFrame', 'setTimeout', 'queueTask'];

  constructor() {
  }

  ngOnInit() {
    if (this.response.length) {
      console.log('ALREADY HAVE A RESPONSE', this.response);
    }
  }

  setResponse($event: Event) {
    if (this.response) {
      // Erase whatever response was previously set
      this.response = [];
    }

    // Establishes event target as an Select Element
    const selectElement = $event.target as HTMLSelectElement;

    this.response.push(selectElement.value);
  }

}
