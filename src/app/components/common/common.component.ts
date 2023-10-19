import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from 'src/app/common/sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

export interface PageDetail {
  title: '',
  backURL: ''
}

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, SidebarComponent, NavbarComponent, RouterModule],
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit{
  constructor(private router: Router) {}

  isHomepage:boolean = true;
  pageoObject:PageDetail;
  
  pagesDetails: any = {
    "rides": {title: 'Your Rides', backURL: '/home'},
    "about": {title: 'About Us', backURL: '/home'},
    "support": {title: 'Need help ?', backURL: '/home'},
    "trip": {title: 'Trip Detail', backURL: '/rides'},
  };

  ngOnInit(): void {
    this.router.events.subscribe(val=>{
      if(val instanceof NavigationEnd) {
        this.isHomepage = (val.url === '/' || val.url === '/home');
        const URL = val.url.split("/")[1] || val.url
        this.pageoObject = this.pagesDetails[URL] || {};
      }
    })
  }
}
