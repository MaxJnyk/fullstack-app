import { User } from '../utils/typeorm';
import { IConversationsService } from './conversations';
import { CreateConversationDto } from './dtos/CreateConversation.dto';
export declare class ConversationsController {
    private readonly conversationsService;
    constructor(conversationsService: IConversationsService);
    createConversation(user: User, createConversationPayload: CreateConversationDto): Promise<any>;
    getConversations({ id }: User): Promise<import("../utils/typeorm").Conversation[]>;
    getConversationById(id: number): Promise<import("../utils/typeorm").Conversation>;
}
