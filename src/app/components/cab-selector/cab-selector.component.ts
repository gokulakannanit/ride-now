import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export interface VechileTypes {
  id:Number,
  name: String,
  imageURL: String,
  minutes: String
}

@Component({
  standalone: true,
  imports:[CommonModule, MatIconModule, MatListModule, MatButtonModule],
  templateUrl: './cab-selector.component.html',
  styleUrls: ['./cab-selector.component.css']
})
export class CabSelectorComponent {
  constructor(private _bottomRef:MatBottomSheetRef) {}
  
  vechileTypes: Array<VechileTypes> = [
    {id: 1, name: 'Auto', imageURL: '/assets/images/car/auto.png', minutes: '4'},
    {id: 2, name: 'Mini', imageURL: '/assets/images/car/mini.png', minutes: '12'},
    {id: 3, name: 'Sedan', imageURL: '/assets/images/car/sedan.png', minutes: '5'},
    {id: 4, name: 'SUV', imageURL: '/assets/images/car/suv.png', minutes: '5'}
  ];
  cabModel: Number = this.vechileTypes[0].id;

  selectCab(_cabModel:Number): void {
    this.cabModel = _cabModel;
  }
  onBookNow(closeMessage: String): void {    
    this._bottomRef.dismiss(closeMessage);
  }
}
