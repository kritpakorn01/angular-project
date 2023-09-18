import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';




@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
  template: `{{selectedMonth}}`
})
export class MonthComponent implements OnInit {

  @Output() dataMonth = new EventEmitter();
  @Output() dataYear = new EventEmitter();


  selectedMonth = 1;
  currentDate: Date = new Date();
  currentMonth: number = this.currentDate.getMonth() + 1
  currentYear: any = this.currentDate.getFullYear() 
  selectedYear: number = this.currentYear;
  year:number[] = []

  constructor() { }

  ngOnInit(): void {
    
    for(let i = 2020 ; i <= this.selectedYear ; i++){
      this.year.push(i)
      // console.log(this.year);
    }

  }

  onMonthSelected(value) {
    this.dataMonth.emit(value)
  }

  onYearSelected(value) {
    this.dataYear.emit(value)
  }

}
