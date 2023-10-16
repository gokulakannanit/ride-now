import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare var closeLoader:any;

export interface PageDetail {
  title: '',
  backURL: ''
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHomepage:boolean = true;
  pageoObject:PageDetail;
  
  pagesDetails: any = {
    "rides": {title: 'Your Rides', backURL: '/home'},
    "about": {title: 'About Us', backURL: '/home'},
    "support": {title: 'Need help ?', backURL: '/home'},
    "trip": {title: 'Trip Detail', backURL: '/rides'},
  };

  constructor(private router: Router) {}
  ngOnInit(): void {
    closeLoader & closeLoader();
    this.router.events.subscribe(val=>{
      if(val instanceof NavigationEnd) {
        this.isHomepage = (val.url === '/' || val.url === '/home');
        console.log(this.isHomepage, "page changed >>>>", val);
        const URL = val.url.split("/")[1] || val.url
        this.pageoObject = this.pagesDetails[URL] || {};
      }
    })
  }
}
