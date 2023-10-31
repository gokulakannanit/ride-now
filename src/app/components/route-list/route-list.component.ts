import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector:'a-route-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css'],
})
export class RouteListComponent {
  @Input() small:boolean = true;
}
