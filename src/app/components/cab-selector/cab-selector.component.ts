import { Component } from '@angular/core';

@Component({
  selector: 'app-cab-selector',
  templateUrl: './cab-selector.component.html',
  styleUrls: ['./cab-selector.component.css']
})
export class CabSelectorComponent {
  cabModel: String = 'mini';
  selectCab(_cabModel:String): void {
    this.cabModel = _cabModel;
  }
}
