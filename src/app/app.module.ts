import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { ToastrModule } from 'ngx-toastr';
import {
  MatBottomSheetModule
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './components/map/map.component';
import { PlaceAutocompleteComponent } from './components/places-autocomplete/places-autocomplete.component';
import { PlaceSelectionComponent } from './components/place-selection/place-selection.component';
import { CabSelectorComponent } from './components/cab-selector/cab-selector.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CabSelectorComponent,
    NavbarComponent,
    MapComponent,
    PlaceSelectionComponent,
    PlaceAutocompleteComponent,
    TripDetailsComponent
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatBottomSheetModule,
    ToastrModule.forRoot({
      preventDuplicates: false,
      progressBar: true,
      countDuplicates: true,
      extendedTimeOut: 3000,
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
