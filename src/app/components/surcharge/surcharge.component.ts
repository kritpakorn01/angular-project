import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnInit {

  @Input() section:string;
  @Input() totalPrice:number;

  constructor() { }

  ngOnInit(): void {
  }

}
