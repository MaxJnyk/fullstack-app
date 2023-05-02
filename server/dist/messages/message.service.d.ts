import { Repository } from 'typeorm';
import { Conversation, Message } from '../utils/typeorm';
import { CreateMessageParams } from '../utils/types';
import { IMessageService } from './message';
export declare class MessageService implements IMessageService {
    private readonly messageRepository;
    private readonly conversationRepository;
    constructor(messageRepository: Repository<Message>, conversationRepository: Repository<Conversation>);
    createMessage({ user, content, conversationId }: CreateMessageParams): Promise<{
        message: Message;
        conversation: Conversation;
    }>;
    getMessagesByConversationId(conversationId: number): Promise<Message[]>;
}
