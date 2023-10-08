import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesAutocompleteComponent } from './places-autocomplete.component';

describe('PlacesAutocompleteComponent', () => {
  let component: PlacesAutocompleteComponent;
  let fixture: ComponentFixture<PlacesAutocompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacesAutocompleteComponent]
    });
    fixture = TestBed.createComponent(PlacesAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
