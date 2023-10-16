import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RideHistoryComponent } from './ride-history.component';



@NgModule({
  declarations: [
    RideHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: RideHistoryComponent,
      }
    ]),
  ]
})
export class RideHistoryModule { }
