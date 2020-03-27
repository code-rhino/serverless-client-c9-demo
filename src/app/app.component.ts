import { Component, OnInit } from '@angular/core';
import { SocketService } from './service/socket-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sc-client';
  message = "";
  messages =[];

  constructor(private socketService:SocketService){
    
  }

  ngOnInit(): void {
  }


}
