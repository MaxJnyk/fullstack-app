import { User } from '../utils/typeorm';
import { CreateMessageDto } from './dtos/CreateMessage.dto';
import { IMessageService } from './message';
import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class MessageController {
    private readonly messageService;
    private eventEmitter;
    constructor(messageService: IMessageService, eventEmitter: EventEmitter2);
    createMessage(user: User, createMessageDto: CreateMessageDto): Promise<void>;
    getMessagesFromConversation(user: User, conversationId: number): Promise<{
        id: number;
        messages: import("../utils/typeorm").Message[];
    }>;
}
