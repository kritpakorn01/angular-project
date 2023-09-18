import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css']
})
export class TaxAmountComponent implements OnInit {

  @Input() msg = 'msg';
  @Input() totalTax:number;
  @Input() inputValue:string;
  // totalTax:number;
  // inputValue: string = 'Initial Value';

  constructor() { }

  ngOnInit(): void {
  }


}
