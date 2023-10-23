import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RideHistoryComponent } from './ride-history.component';
import { RouteListComponent } from 'src/app/components/route-list/route-list.component';



@NgModule({
  declarations: [
    RideHistoryComponent
  ],
  imports: [
    CommonModule,
    RouteListComponent,
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
