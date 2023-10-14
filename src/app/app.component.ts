import { Component } from '@angular/core';
declare var closeLoader:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
  ngOnInit(): void {
    closeLoader & closeLoader();
  }
}
