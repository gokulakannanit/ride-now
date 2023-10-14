import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  @Output() closeme = new EventEmitter();
  navItems: any = [
    {
      title: 'Your Rides',
      icon: 'history',
      redirectURL: '/rides'
    },
    {
      title: 'Payment',
      icon: 'payment',
      redirectURL: '/rides'
    },
    {
      title: 'Support',
      icon: 'support',
      redirectURL: '/support'
    },
    {
      title: 'About',
      icon: 'info',
      redirectURL: '/about'
    }
  ];

  redirectTo(URL: string): void {
    this.router.navigateByUrl(URL);
    this.closeme.emit('');
  }
}
