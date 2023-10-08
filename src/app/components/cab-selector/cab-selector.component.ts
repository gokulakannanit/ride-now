import { Component } from '@angular/core';
import {
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-cab-selector',
  templateUrl: './cab-selector.component.html',
  styleUrls: ['./cab-selector.component.css'],
  standalone: true,
  imports: [MatListModule],
})
export class CabSelectorComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<CabSelectorComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
