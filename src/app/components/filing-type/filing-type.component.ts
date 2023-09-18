import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css'],
})
export class FilingTypeComponent implements OnInit {

  @Input() value = 0 ;
  @Input() textValue = "text";
  // @Input() 

  defaulChecked = 'Ordinary Filing' ;


  constructor() { }

  ngOnInit(): void {

  }
}
