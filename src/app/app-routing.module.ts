import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilingTypeComponent } from './components/filing-type/filing-type.component';
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
