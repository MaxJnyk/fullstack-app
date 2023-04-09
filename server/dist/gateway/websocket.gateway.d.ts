import { OnGatewayConnection } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class MessagingGateway implements OnGatewayConnection {
    handleConnection(client: Socket, ...args: any[]): void;
    server: Server;
    handleCreateMessage(data: any): void;
    handleMessageCreateEvent(payload: any): void;
}
