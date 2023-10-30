import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone: true,
  imports:[CommonModule, GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  constructor(private toastr: ToastrService) {} 

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  mapZoom = 16;
  mapCenter: google.maps.LatLng;
  mapOptions: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
    mapTypeControl: false,
    draggable: false,
    scaleControl: false,
    scrollwheel: false,
    fullscreenControl: false,
    panControl: false,
    zoomControl: false,
  };

  markerInfoContent = '';
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    animation: google.maps.Animation.BOUNCE,
  };

  ngOnInit(): void {
    if (navigator.geolocation) {
      this.getCurrentLocation();
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  openInfoWindow(marker: MapMarker) { 
    // this is called when the marker is clicked.
    this.infoWindow.open(marker);
  }

  mapInit() {
    setTimeout(() => {
        var ele = document.getElementsByClassName('dismissButton');
        ele.length > 0 && (ele[0] as HTMLButtonElement).click();
    }, 1000);
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      this.updateMap.bind(this), this.errorLoading.bind(this), { enableHighAccuracy: true }
    );
  }

  updateMap(position: GeolocationPosition) {

    const point: google.maps.LatLngLiteral = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    this.mapCenter = new google.maps.LatLng(point);
    this.map.panTo(point);

    this.markerInfoContent = "I'm here!";

    this.markerOptions = {
      draggable: false,
      animation: google.maps.Animation.DROP,
    };
  }

  errorLoading(error: any){  
    if (error.PERMISSION_DENIED) {
      this.toastr.error("Couldn't get your location", 'Permission denied');
    } else if (error.POSITION_UNAVAILABLE) {
      this.toastr.error(
        "Couldn't get your location",
        'Position unavailable'
      );
    } else if (error.TIMEOUT) {
      this.toastr.error("Couldn't get your location", 'Timed out');
    } else {
      this.toastr.error(error.message, `Error: ${error.code}`);
    }

  }

}
