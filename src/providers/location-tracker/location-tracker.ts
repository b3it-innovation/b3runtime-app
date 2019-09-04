import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Geoposition, GeolocationOptions } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';

@Injectable()
export class LocationTracker {

  public watch: any;
  public lat: number = 0;
  public lng: number = 0;
  public accuracy: number = 0;
  public alt: number = 0;
  public altAccuracy: number = 0;
  public head: number = 0;
  public speed: number = 0;
  private options: GeolocationOptions = {
    enableHighAccuracy: true,
  };

  constructor(public zone: NgZone, private geolocation: Geolocation) {

  }

  startTracking() {
    // Foreground Tracking

    this.watch = this.geolocation.watchPosition(this.options)
      .filter((p) => p.coords !== undefined)
      .subscribe((position: Geoposition) => {

        console.log('Geolocation: ' + position.coords.latitude + ',' + position.coords.longitude);

        // Run update inside of Angular's zone
        this.zone.run(() => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.accuracy = position.coords.accuracy;
          this.alt = position.coords.altitude;
          this.altAccuracy = position.coords.altitudeAccuracy;
          this.head = position.coords.heading;
          this.speed = position.coords.speed;
        });
      });
  }

  stopTracking() {
    console.log('stopTracking');
    this.watch.unsubscribe();
  }

  getPosition() {
    return this.geolocation.getCurrentPosition(this.options);
  }
}
