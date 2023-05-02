import { OnGatewayConnection } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AuthenticatedSocket } from '../utils/interfaces';
import { CreateMessageResponse } from '../utils/types';
import { IGatewaySessionManager } from './gateway.session';
export declare class MessagingGateway implements OnGatewayConnection {
    private readonly sessions;
    constructor(sessions: IGatewaySessionManager);
    server: Server;
    handleConnection(socket: AuthenticatedSocket, ...args: any[]): void;
    handleCreateMessage(data: any): void;
    handleMessageCreateEvent(payload: CreateMessageResponse): void;
}
