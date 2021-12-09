import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlaneComponent } from './plane/plane.component';
import { RealComponent } from './real/real.component';

const routes: Routes = [
  { path: 'home', component: RealComponent },
  { path: '**', component: NotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'plane', component: PlaneComponent },
  { path: 'hotel', component: HotelComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
