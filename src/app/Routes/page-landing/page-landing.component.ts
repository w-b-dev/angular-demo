import { Component, OnInit } from '@angular/core';
import { DummyTable } from '../../Shared/types/DummyTable';

@Component({
  selector: 'app-page-landing',
  templateUrl: 'page-landing.component.html',
  styleUrls: ['page-landing.component.scss'],
})
export class PageLandingComponent implements OnInit {

  selectedTable: object;
  tables: Array<DummyTable> = [
    {
      table_id: 1,
      table_name: 'Table 1',
      columns: [
        'Table 1 Column A0',
        'Table 1 Column A1',
        'Table 1 Column A2',
        'Table 1 Column A3',
      ],
      rows: [
        [
          'Row A0',
          'Row A1',
          'Row A2',
          'Row A3',
        ],
        [
          'Row B0',
          'Row B1',
          'Row B2',
          'Row B3',
        ],
      ],
    },
    {
      table_id: 2,
      table_name: 'Table 2',
      columns: [
        'Table 2 Column A0',
        'Table 2 Column A1',
        'Table 2 Column A2',
        'Table 2 Column A3',
      ],
      rows: [
        [
          'Row A0',
          'Row A1',
          'Row A2',
          'Row A3',
        ],
        [
          'Row B0',
          'Row B1',
          'Row B2',
          'Row B3',
        ],
        [
          'Row C0',
          'Row C1',
          'Row C2',
          'Row C3',
        ],
      ],
    },
  ];
  endpoint: string;

  constructor() {
  }

  ngOnInit() {
  }

  /*TODO: in a future update, save selections to the Store for state management*/
  selectRoute(event: MouseEvent) {
    // TS suggestions to use the explicit type assertion 'as'
    const element: HTMLElement = event.target as HTMLElement;
    // Method to clear the active class to all but one element
    this.filterActiveClass(element);
    // Call the service to provide results.
    this.endpoint = element.innerText;

    this.tables.forEach(e => {
      if ( e.table_name === this.endpoint ) {
        this.selectedTable = e;
      }
    });
  }

  filterActiveClass(element: HTMLElement) {
    // Inspect all elements under the target's parent
    /*TODO: fix type checking warning*/
    // @ts-ignore
    for ( const parentElementKey of element.parentElement.childNodes ) {
      // If the element in the loop is the target, toggle active class
      if ( parentElementKey === element ) {
        element.classList.contains('active')
          ? element.classList.remove('active')
          : element.classList.add('active');
      } else {
        // If the element in the loop is NOT the target, remove active class
        if ( parentElementKey.classList && parentElementKey.classList.contains('active') ) {
          parentElementKey.classList.remove('active');
        }
      }
    }
  }
}
