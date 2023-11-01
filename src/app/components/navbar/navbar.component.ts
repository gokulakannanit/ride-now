import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, Signal, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

export interface navListObject {
  title: string,
  icon: string,
  redirectURL: string
}

@Component({
  standalone: true,
  selector: 'a-navbar',
  imports: [CommonModule, MatIconModule, MatListModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  constructor(private router: Router) {}

  @Output() closeme = new EventEmitter();
  navItems:Signal<navListObject[]> = signal([
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
  ]);

  redirectTo(URL: string): void {
    this.router.navigateByUrl(URL);
    this.closeme.emit('');
  }
}
