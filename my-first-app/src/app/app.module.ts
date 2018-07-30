import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DateComponent } from './date/date.component';
import { FormsModule } from '@angular/forms';
import { ViewModule } from './view/view.module';
import { WsServiceService } from './ws-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ViewModule,
    HttpClientModule
  ],
  providers: [WsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
