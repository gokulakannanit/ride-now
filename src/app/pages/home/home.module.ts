import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CabSelectorComponent } from 'src/app/components/cab-selector/cab-selector.component';
import { MapComponent } from 'src/app/components/map/map.component';
import { PlaceSelectionComponent } from 'src/app/components/place-selection/place-selection.component';
import { PlaceAutocompleteComponent } from 'src/app/components/places-autocomplete/places-autocomplete.component';
import { StarRatingComponent } from 'src/app/components/star-rating/star-rating.component';
import { TripDetailsComponent } from 'src/app/components/trip-details/trip-details.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
      HomeComponent,
      CabSelectorComponent,
      MapComponent,
      PlaceSelectionComponent,
      PlaceAutocompleteComponent,
      TripDetailsComponent,
      StarRatingComponent,
  ],
  imports: [
    CommonModule,
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
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
    ]),
  ],
  providers: [
    {provide: ToastrService, useClass: ToastrService}
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class HomeModule {}
