import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { SidebarComponent } from 'src/app/common/sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavigationEnd, NavigationSkipped, NavigationStart, Router, RouterModule } from '@angular/router';

export interface PageDetail {
  title: '',
  backURL: ''
}

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, SidebarComponent, NavbarComponent, RouterModule, MatProgressBarModule],
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit{
  constructor(private _router: Router) {}

  isHomepage:boolean = true;
  isLoading:boolean = false;
  pageoObject:PageDetail;
  
  pagesDetails: any = {
    "rides": {title: 'Your Rides', backURL: '/home'},
    "about": {title: 'About Us', backURL: '/home'},
    "support": {title: 'Need help ?', backURL: '/home'},
    "trip": {title: 'Trip Detail', backURL: '/rides'},
  };

  ngOnInit(): void {
    this.checkForHomePage(window.location.pathname);
    console.log("CurrentNavigation ::: ", window.location.pathname);
    this._router.events.subscribe(val=>{
      if(val instanceof NavigationStart) {
        this.isLoading = true;
        this.checkForHomePage(val.url);
      }
      if(val instanceof NavigationEnd || val instanceof NavigationSkipped) {
        this.isLoading = false;
      }
    })
  }

  checkForHomePage(val:any): void {
    this.isHomepage = (val === '/' || val === '/home');
    const URL = val.split("/")[1] || val
    this.pageoObject = this.pagesDetails[URL] || {};
  }
}
