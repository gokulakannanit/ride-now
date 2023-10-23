import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RidesComponent } from './rides.component';
import { RouteListComponent } from 'src/app/components/route-list/route-list.component';

@NgModule({
  declarations: [
    RidesComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouteListComponent,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: RidesComponent,
      }
    ]),
  ]
})
export class RidesModule { }
