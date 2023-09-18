import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilingTypeComponent } from './components/filing-type/filing-type.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MonthComponent } from './components/month/month.component';
import { TaxAmountComponent } from './components/tax-amount/tax-amount.component';
import { SaleAmountComponent } from './components/sale-amount/sale-amount.component';
import { SurchargeComponent } from './components/surcharge/surcharge.component';
import { PenaltyComponent } from './components/penalty/penalty.component';
import { TotalAmountComponent } from './components/total-amount/total-amount.component';



@NgModule({
  declarations: [
    AppComponent,
    FilingTypeComponent,
    MonthComponent,
    TaxAmountComponent,
    SaleAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
