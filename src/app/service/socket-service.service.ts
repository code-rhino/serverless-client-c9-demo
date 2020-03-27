import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subject, Observable, Observer } from 'rxjs';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

const CHAT_URL = "";

export interface Message {
  action: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  myWebSocket:WebSocketSubject<any>;
  constructor(){}
}
