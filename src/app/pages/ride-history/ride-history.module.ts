import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RideHistoryComponent } from './ride-history.component';
import { RouteListComponent } from 'src/app/components/route-list/route-list.component';
import { DriverDetailComponent } from 'src/app/components/driver-detail/driver-detail.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    RideHistoryComponent
  ],
  imports: [
    CommonModule,
    RouteListComponent,
    DriverDetailComponent,
    MatButtonModule,
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
