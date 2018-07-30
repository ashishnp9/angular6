import { Component } from '@angular/core';
import { User } from 'src/app/date/user.model';
import { Console } from '@angular/core/src/console';
import { WsServiceService } from './ws-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  homeRoute = 'home';
  aboutRoute = "about";

  routes = [

    {label:'Home',url:'home'},
    {label:'About',url:'about'}

  ];
  
  
}
