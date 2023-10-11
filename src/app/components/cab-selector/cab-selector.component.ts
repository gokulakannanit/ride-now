import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-cab-selector',
  templateUrl: './cab-selector.component.html',
  styleUrls: ['./cab-selector.component.css']
})
export class CabSelectorComponent {
  constructor(private _bottomRef:MatBottomSheetRef) {}
  cabModel: String = 'mini';
  selectCab(_cabModel:String): void {
    this.cabModel = _cabModel;
  }
  onBookNow(closeMessage: String): void {    
    this._bottomRef.dismiss(closeMessage);
  }
}
