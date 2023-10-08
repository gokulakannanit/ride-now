import { Component } from '@angular/core';
import { PlaceSearchResult } from '../places-autocomplete/places-autocomplete.component';


@Component({
  selector: 'app-place-selection',
  templateUrl: './place-selection.component.html',
  styleUrls: ['./place-selection.component.css'],
})
export class PlaceSelectionComponent {
  fromValue: PlaceSearchResult = { address: '' };
  toValue: PlaceSearchResult = { address: '' };
}
