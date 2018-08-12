import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'CampDetails', loadChildren: './camp-details/camp-details.module#CampDetailsPageModule' },
  { path: 'MyDetails', loadChildren: './my-details/my-details.module#MyDetailsPageModule' },
  { path: 'Location', loadChildren: './location/location.module#LocationPageModule' },
  { path: 'GoogleMap', loadChildren: './components/google-map/google-map.module#GoogleMapPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
