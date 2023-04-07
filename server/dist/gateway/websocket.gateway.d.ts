import { OnGatewayConnection } from '@nestjs/websockets';
import { Server } from 'socket.io';
export declare class MessagingGateway implements OnGatewayConnection {
    handleConnection(client: any, ...args: any[]): void;
    server: Server;
    handleCreateMessage(data: any): void;
    handleMessageCreateEvent(payload: any): void;
}
