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
    this.socketService.myWebSocket.subscribe(    
      msg => this.onNewMessage(msg), 
      // Called whenever there is a message from the server    
      err => console.log(err), 
      // Called if WebSocket API signals some kind of error    
      () => console.log('complete') 
      // Called when connection is closed (for whatever reason)  
   );
  }

  newMessage(){
    this.socketService.myWebSocket.next({"action" : "onMessage" , "message" : this.message});
    this.message = "";
  }

  private onNewMessage(msg){
    console.log(msg.data);
    this.messages.push(msg.data);
  }


}
