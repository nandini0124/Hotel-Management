import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/page/home/home.component';
import { BookingComponent } from './components/page/booking/booking.component';
import { GalleryComponent } from './components/page/gallery/gallery.component';
import { RestaurantComponent } from './components/page/restaurant/restaurant.component';
import { ServicesComponent } from './components/page/services/services.component';
import { TestimonialsComponent } from './components/page/testimonials/testimonials.component';
import { HeaderComponent } from './components/util/header/header.component';
import { FooterComponent } from './components/util/footer/footer.component';
import { NavbarComponent } from './components/util/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    GalleryComponent,
    RestaurantComponent,
    ServicesComponent,
    TestimonialsComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
