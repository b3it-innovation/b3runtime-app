import { LocationTracker } from './../../providers/location-tracker/location-tracker';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, GoogleMapsMarkerOptions, GoogleMapsAnimation, GoogleMapsMarker } from 'ionic-native';

declare var plugin: any;
declare var cordova: any;
declare var google: any;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  constructor(public navCtrl: NavController, public platform: Platform, public locationTracker: LocationTracker) {
    platform.ready().then(() => {
      this.locationTracker.startTracking();
      this.loadMap();
    });
  }

  loadMap() {
    this.locationTracker.getPosition().then(position => {
      let location = new GoogleMapsLatLng(position.coords.latitude, position.coords.longitude);
      this.map = new GoogleMap('map', {
        'backgroundColor': 'red',
        'controls': {
          'compass': true,
          'myLocationButton': true,
          'indoorPicker': true,
          'zoom': true
        },
        'gestures': {
          'scroll': true,
          'tilt': true,
          'rotate': true,
          'zoom': true
        },
        'camera': {
          'latLng': location,
          'tilt': 30,
          'zoom': 15,
          'bearing': 50
        }
      });

      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
        console.log('Map is ready!');
      });
    });
  }

  addMarker() {

    let options: GoogleMapsMarkerOptions = {
      position: new GoogleMapsLatLng(this.locationTracker.lat, this.locationTracker.lng),
      title: "Delmål 1",
      snippet: "Här är fråga 1:\nlat:" + this.locationTracker.lat + "\nlon:" + this.locationTracker.lng,
      animation: GoogleMapsAnimation.BOUNCE,
      draggable: true,
      icon: {
        url: "https://www.b3it.se/media/1667/b3it_on_red.jpg",
        size: {
          width: 20,
          height: 20
        }
      }
    }

    this.map.addMarker(options).then((marker: GoogleMapsMarker) => {
      marker.getPosition().then(pos => {
        console.log(pos.lat);
      }).catch(err => {
        console.log(err);
      });

      marker.addEventListener(GoogleMapsEvent.MARKER_DRAG_END).subscribe((marker2: GoogleMapsMarker) => {
        marker2.getPosition().then(pos => {
          console.log(pos.lat);
        }).catch(err => {
          console.log(err);
        });
      });

      marker.addEventListener(GoogleMapsEvent.INFO_CLICK).subscribe((marker1: GoogleMapsMarker) => {
        marker1.setTitle("Hejsan");
        marker1.setSnippet("Test");
        marker1.hideInfoWindow();
        marker1.showInfoWindow();
      })
    });

    // var div = document.getElementById("map");
    // var map = plugin.google.maps.Map.getMap(div);
    // map.one(plugin.google.maps.event.MAP_READY, function () {

    //   map.addMarker({
    //     'position': {
    //       lat: this.locationTracker.lat,
    //       lng: this.locationTracker.lng
    //     },
    //     title: "Hello Cordova Google Maps\n for iOS and Android",
    //     snippet: "This plugin is awesome!",
    //   }, function (marker) {

    //     // Display the infoWindow
    //     marker.showInfoWindow();

    //   });
    // });
  }
}

