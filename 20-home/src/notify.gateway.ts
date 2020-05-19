import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io'

@WebSocketGateway()
export class NotifyGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  handleConnection(client: any, ...args: any[]) {
    
    console.log("User connected");
  }
  handleDisconnect(client: any) {
    
    console.log("User disconnected")
  }

}
