import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/date/user.model';
import { WsServiceService } from 'src/app/ws-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  title = 'Angular6';
  name : string = "ashish";
  user : User;
  InputBox :String = "";
  response : any;


  

  constructor(private service: WsServiceService,private http:HttpClient){

    service.printlog("Hello Ashish from ws serive");

    this.user = new User();
    this.user.name = "Ashish Patel";
    this.user.designation = "Software developer";
    this.user.phone = [ '8460588992','8849783982' ]
    this.user.address = "Pune";
  }

  
  searchUser(){

    this.http.get('https://api.github.com/users/'+this.InputBox)
      .subscribe((response) => {
            this.response = response;
            console.log(response);
    })
  }

}
