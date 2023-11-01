import { CommonModule } from '@angular/common';
import { Component, ViewChild, Input } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  standalone: true,
  selector:'a-sidebar',
  imports: [CommonModule, MatSidenavModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() public position:'start' | 'end'  = 'start';
  @ViewChild('ctrl') ctrl: MatSidenav;

  constructor() {}

  open(): Promise<any> {
    return this.ctrl.open();
  }
  toggle(): Promise<any> {
    return this.ctrl.toggle();
  }
  close(): Promise<any> {
    console.log('here is the close');
    return this.ctrl.close();
  }
}
