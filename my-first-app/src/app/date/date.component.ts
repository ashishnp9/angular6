import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { User } from 'src/app/date/user.model';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  //user :any;

  @Input('user')  user : User;

  isshow : boolean = true;

  datemessage:string;

  constructor() {



    setInterval(()=>{
    let date = new Date();
    this.datemessage  = date.toDateString() + ' '+ date.toLocaleTimeString(); 
    },1000)

   }

   clickOnButton(){
     this.isshow = !this.isshow;
   }

  ngOnInit() {




  }

  addnumber(a:number,b:number){
    return a+b;
  }

}
