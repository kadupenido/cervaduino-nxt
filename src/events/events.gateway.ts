import { Logger } from '@nestjs/common';
import { OnGatewayConnection, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway(3002)
export class EventsGateway implements OnGatewayConnection {

  @WebSocketServer() server;

  handleConnection(client) {
    Logger.log('Cliente connected...');
  }

}
