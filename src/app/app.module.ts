import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MainComponent } from './main/main.component';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { FaqComponent } from './faq/faq.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { PlaneComponent } from './plane/plane.component';
import { HotelComponent } from './hotel/hotel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RealComponent } from './real/real.component';
import { FormsModule } from '@angular/forms';
 import {HttpClientModule} from '@angular/common/http';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MainComponent,
    SuggestionsComponent,
    FaqComponent,
    InfoComponent,
    FooterComponent,
    PlaneComponent,
    HotelComponent,
    NotFoundComponent,
    RealComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    HttpClientModule
  ],
  providers:  [
    {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
