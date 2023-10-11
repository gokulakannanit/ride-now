import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CabSelectorComponent } from './components/cab-selector/cab-selector.component';
declare var closeLoader:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}
  ngOnInit(): void {
    closeLoader & closeLoader();
  }

  onRideNow(): void {
    this._bottomSheet.open(CabSelectorComponent);
  }
}
