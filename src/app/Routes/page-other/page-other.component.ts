import { Component, OnInit } from '@angular/core';
import { Calculation } from '../../Shared/types/Calculation';

@Component({
  selector: 'app-page-other',
  templateUrl: 'page-other.component.html',
  styleUrls: ['page-other.component.scss'],
})
export class PageOtherComponent implements OnInit {

  calculation: Calculation = {
    skylight_model: null,
    customer_type: null,
    glazing_type: null,
    dome_quantity: null,
    frame_finishing: null,
    tinted_glazing: null,
    oc_width: null,
    oc_height: null,
    setup_fee: null,
    oversize_fee: null,
    price: null,
  };

  calculationOptions = {
    CustomerType: [
      'contractor',
      'retail',
      'dealer',
    ],
    SkylightModel: [
      'pvccm',
      'pvcsr',
      'ff',
      'ffsr',
    ],
    GlazingType: [
      'dome',
      'glass',
    ],
    FrameFinishing: [
      'black',
      'mill',
      'brown',
    ],
    NumberDomes: [
      'single',
      'double',
      'triple',
    ],
  };

  constructor() {
  }

  ngOnInit() {
  }

  log(a: object) {
    // snapshot of the store state
    console.clear();
    console.table(a);
  }

  updateCalculation(key: string, value: any) {
    // update the store with the current change
    this.calculation[key] = value;
    // updates the calculated values based on the change
    this.updatePrice();
    this.updateOversizeFee();
    this.updateSetupFee();
    // displays the result for debugging purposes
    this.log(this.calculation);
  }

  updatePrice() {
    this.calculation.price = Math.round(Math.random() * 1000);
  }

  updateOversizeFee() {
    this.calculation.oversize_fee = Math.round(this.calculation.price * 0.15);
  }

  updateSetupFee() {
    this.calculation.setup_fee = Math.round(this.calculation.price * 0.03);
  }
}
