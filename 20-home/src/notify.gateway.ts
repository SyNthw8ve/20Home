import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway()
export class NotifyGateway implements OnGatewayConnection, OnGatewayDisconnect {

  users: Map<string, Object>
  private logger = new Logger();

  constructor() {

    this.users = new Map<string, Object>();
  }

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('register')
  handleMessage(client: any, payload: any) {
    
    const {username, ...data} = payload;
    
    this.users.set(username, client);

    this.logger.warn(`User ${username} registered`);
  }

  @SubscribeMessage('remove_user')
  handleEvent(client: any, payload: any) {

    const username = payload;

    this.users.delete(username);

    this.logger.warn(`User ${username} unregistered`);
  }

  handleConnection(client: any, ...args: any[]) {
    
    this.logger.log("User connected");
  }

  handleDisconnect(client: any) {
    
    this.logger.log("User disconnected");
  }

  hasUser(username: string) : boolean {

    return this.users.has(username);
  }

}
