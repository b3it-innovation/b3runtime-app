import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
	{ path: 'game', loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule],
	providers: [
		Geolocation,
	]
})
export class AppRoutingModule { }
