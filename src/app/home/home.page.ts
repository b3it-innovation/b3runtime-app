import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	logoSrc: string = '../assets/images/b3runtime.png';
	b3logoSrc: string = '../assets/images/b3logo.png';

	constructor() {
	}

}
