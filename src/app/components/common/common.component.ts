import { Component, OnInit, WritableSignal, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DriverDetailComponent } from 'src/app/components/driver-detail/driver-detail.component';
import { SidebarComponent } from 'src/app/common/sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavigationEnd, NavigationSkipped, NavigationStart, Router, RouterModule } from '@angular/router';

export interface PageDetail {
  title: string,
  backURL: string
}

export interface PagesDetails {
  [id: string]: PageDetail
}

@Component({
  standalone: true,
  imports: [
    CommonModule, 
    MatIconModule, 
    MatButtonModule, 
    SidebarComponent, 
    NavbarComponent, 
    RouterModule, 
    DriverDetailComponent, 
    MatProgressBarModule
  ], 
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonComponent implements OnInit{
  constructor(private _router: Router) {}

  isHomepage: WritableSignal<boolean> = signal(true);
  isLoading: WritableSignal<boolean> = signal(false);

  pageoObject: WritableSignal<PageDetail> = signal({title:'', backURL: ''});
  
  pagesDetails: WritableSignal<PagesDetails> = signal({
    "rides": {title: 'Your Rides', backURL: '/home'},
    "about": {title: 'About Us', backURL: '/home'},
    "support": {title: 'Need help ?', backURL: '/home'},
    "trip": {title: 'Trip Detail', backURL: '/rides'},
  });

  ngOnInit(): void {
    this.checkForHomePage(window.location.pathname);
    this._router.events.subscribe(val=>{
      if(val instanceof NavigationStart) {
        this.isLoading.set(true);
        this.checkForHomePage(val.url);
      }
      if(val instanceof NavigationEnd || val instanceof NavigationSkipped) {
        //setTimeout(()=>{this.isLoading = false}, 500);
        this.isLoading.set(false);
      }
    })
  }

  checkForHomePage(val:any): void {
    this.isHomepage.set(val === '/' || val === '/home');
    const URL = val.split("/")[1] || val;
    const selectPageobj:PagesDetails = this.pagesDetails();
    this.pageoObject.set(selectPageobj[URL] || {});
  }
}
