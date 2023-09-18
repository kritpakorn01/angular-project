import { Component, OnInit ,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
export class SaleAmountComponent implements OnInit {

  @Output() saleVat = new EventEmitter();

  totalTax:number; 
  totalDefault:number; 
  inputValue: string = '';
  saleAmount:number;

  constructor() { }

  ngOnInit(): void {
    
  }

  cheangFunc(totalTax) {
    let data;
    // this.totalDefault = totalTax
    // data = totalTax * 0.07 ;
    // this.saleAmount = Math.round(data * 10) / 10;
    this.saleVat.emit(totalTax);
  }
}
