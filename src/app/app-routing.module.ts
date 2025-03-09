import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OpportunityHeaderComponent } from './micro-ui/opportunity-header/opportunity-header.component';
const routes: Routes = [
  { path: 'opportunity-header', component: OpportunityHeaderComponent }, // Default Route
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
