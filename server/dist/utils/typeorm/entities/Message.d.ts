import { Conversation } from './Conversation';
import { User } from './User';
export declare class Message {
    id: number;
    content: string;
    createdAt: number;
    author: User;
    conversation: Conversation;
}
