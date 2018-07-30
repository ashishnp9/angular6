import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WsServiceService {

  constructor() { }

  printlog(arg){
    //alert(arg);
    console.log(arg);
  }

}
