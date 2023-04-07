import { User } from './entities/User';
import { Session } from './entities/Session';
import { Conversation } from './entities/Conversation';
import { Message } from './entities/Message';
declare const entities: (typeof Conversation | typeof User | typeof Message | typeof Session)[];
export default entities;
export { User, Session, Conversation, Message };
