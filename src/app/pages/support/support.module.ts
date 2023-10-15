import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SupportComponent,
      },
    ]),
  ]
})
export class SupportModule { }
