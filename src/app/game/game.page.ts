import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Geolocation, PositionError } from '@ionic-native/geolocation/ngx';

@Component({
	selector: 'app-home',
	templateUrl: 'game.page.html',
	styleUrls: ['game.page.scss'],
})
export class GamePage {

	public geolocationData: Object;

	constructor(
		public toastController: ToastController,
		private geolocation: Geolocation
	) {
	}

	ngOnInit() {
		this.runGeolocation();
	}

	runGeolocation() {
		let watch = this.geolocation.watchPosition();
		watch.subscribe((data) => {
			if (data && data.coords) {
				this.geolocationData = data.coords;
				console.log(this.geolocationData);
			} else {
				// Cast to PositionError
				const error = (<PositionError> <unknown> data);
				this.setErrorMessage(`GEOLOCATION ERROR: ${error.message}`);
			}
		});
	}

	async setErrorMessage(message: string) {
		const toast = await this.toastController.create({
			message: (message) ? message : 'Ett fel uppstod',
			showCloseButton: true,
		});
		toast.present();
	}

}
