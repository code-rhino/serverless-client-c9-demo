import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject, Observable, Observer } from 'rxjs';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

const CHAT_URL = "wss://ryxmrqp4k0.execute-api.us-east-1.amazonaws.com/dev";

export interface Message {
  action: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  myWebSocket:WebSocketSubject<any>;

  constructor(){
    this.myWebSocket = webSocket({
      url:CHAT_URL,
      deserializer: msg => {
        return msg;
      }
    });


  }


}
