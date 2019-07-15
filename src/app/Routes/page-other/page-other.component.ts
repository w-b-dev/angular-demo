import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-other',
  templateUrl: 'page-other.component.html',
  styleUrls: ['page-other.component.scss'],
})
export class PageOtherComponent implements OnInit{

  constructor() {

  }

  // moveBox(el: HTMLElement) {
  //   console.log(el);
  //   el.setAttribute('innerText', (el.offsetWidth + 10).toString());
  // }

  ngOnInit(): void {
    // const el0 = document.getElementsByClassName('box')[0] as HTMLElement;
    // const el1 = document.getElementsByClassName('box')[1] as HTMLElement;
    // this.moveBox(el0);
    // this.moveBox(el1);
  }
}
