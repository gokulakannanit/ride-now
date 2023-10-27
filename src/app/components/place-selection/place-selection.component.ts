import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { PlaceAutocompleteComponent, PlaceSearchResult } from '../places-autocomplete/places-autocomplete.component';
import { MatIconModule } from '@angular/material/icon';


@Component({
  standalone: true,
  imports: [ CommonModule, MatListModule, MatIconModule, PlaceAutocompleteComponent ],
  templateUrl: './place-selection.component.html',
  styleUrls: ['./place-selection.component.css'],
})
export class PlaceSelectionComponent {
  fromValue: PlaceSearchResult = { address: '' };
  toValue: PlaceSearchResult = { address: '' };
}
