import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {

  radioBtn:any;
  pageNumber = 0;
  month:string;
  year:string;

  totalVat:number;
  surchange:number;
  totalPrice:number;
  totalService:number
  totalInput:number;

  next:number;
  back:number;

  inputValue: string = 'Initial Value';

  filing = [
    {id: 0 , value: 'Ordinary Filing'},
    {id: 1 , value: 'Additional Filing'},
  ]

  
  ngOnInit () {
    this.typeOfFiling(0);
    
  }

  typeOfFiling(value) {
    if (value == 0) {
      this.radioBtn = value ;
      console.log(value);
    } else {
      this.radioBtn = value ;
      console.log(value);
    }
    
  }

  checkMont(event) {

      switch (event) {
          case '1':
            this.month = "January";
              break;
          case '2':
            this.month = "February";
              break;
          case '3':
              this.month = "March";
              break;
          case '4':
            this.month = "April";
              break;
          case '5':
              this.month = "May";
              break;
          case '6':
            this.month = "June";
              break;
          case '7':
              this.month = "July";
              break;
          case '8':
              this.month = "August";
              break;
          case '9':
            this.month = "September";
              break;
          case '10':
              this.month = "October";
              break;
          case '11':
            this.month = "November";
              break;
          case '12':
              this.month = "December";
              break;
      }
  }

  checkYear(event) {
    this.year = event;
    console.log(this.year )
  }

  calculate(number) {
    console.log(number + 10,'ทดสอบ');
  }

  saleVatFunc(event) {
    let dataSevice
    let data

    this.totalService = event ;
    dataSevice = this.totalService *0.07
    data = dataSevice  * 0.1
    this.totalInput = Math.round(dataSevice * 100) / 100;
    this.totalVat = Math.round(data * 100) / 100;
    this.surchange = this.totalVat;
    this.totalPrice = this.totalVat + this.surchange + 200;

  }



  backPage(page) {
    this.pageNumber = page - 1;
    console.log(this.pageNumber);
  }
  
  nextPage(page) {
    this.pageNumber = page + 1;
    console.log(this.pageNumber);
  }



}
