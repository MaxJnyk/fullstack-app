import { Module } from '@nestjs/common';
import { Services } from '../utils/constants';
import { MessagingGateway } from './websocket.gateway';
import { GatewaySessionManager } from './gateway.session';
import { ConversationsModule } from '../conversations/conversations.module';

@Module({
  imports: [ConversationsModule],
  providers: [
    MessagingGateway,
    {
      provide: Services.GATEWAY_SESSION_MANAGER,
      useClass: GatewaySessionManager,
    },
  ],
})
export class GatewayModule {}
