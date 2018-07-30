import { Component, OnInit } from '@angular/core';
import { WsServiceService } from '../../ws-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private wsService: WsServiceService) {
  console.log("Hello from View module");
}
  ngOnInit() {
  }

}
