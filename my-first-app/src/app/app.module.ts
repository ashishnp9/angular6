import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DateComponent } from './date/date.component';
import { FormsModule } from '@angular/forms';
import { ViewModule } from './view/view.module';
import { WsServiceService } from './ws-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app-routing.module';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AboutProfileComponent } from './about-profile/about-profile.component';
import { AboutContactComponent } from './about-contact/about-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DateComponent,
    AboutComponent,
    ErrorComponent,
    HomeComponent,
    AboutProfileComponent,
    AboutContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ViewModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [WsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
