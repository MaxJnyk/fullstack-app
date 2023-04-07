import { Repository } from 'typeorm';
import { Conversation, Message } from '../utils/typeorm';
import { CreateMessageParams } from '../utils/types';
import { IMessageService } from './message';
export declare class MessageService implements IMessageService {
    private readonly messageRepository;
    private readonly conversationRepository;
    constructor(messageRepository: Repository<Message>, conversationRepository: Repository<Conversation>);
    createMessage({ user, content, conversationId, }: CreateMessageParams): Promise<Message>;
    getMessagesByConversationId(conversationId: number): Promise<Message[]>;
}
