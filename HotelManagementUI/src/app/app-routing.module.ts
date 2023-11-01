import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { ServicesComponent } from './components/page/services/services.component';
import { GalleryComponent } from './components/page/gallery/gallery.component';
import { RestaurantComponent } from './components/page/restaurant/restaurant.component';
import { TestimonialsComponent } from './components/page/testimonials/testimonials.component';
import { BookingComponent } from './components/page/booking/booking.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'service',
    component: ServicesComponent,
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    pathMatch: 'full'
  },
  {
    path: 'restaurant',
    component: RestaurantComponent,
    pathMatch: 'full'
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent,
    pathMatch: 'full'
  },
  {
    path: 'booking',
    component: BookingComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
