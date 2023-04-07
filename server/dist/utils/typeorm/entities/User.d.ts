import { Message } from './Message';
export declare class User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    messages: Message[];
}
