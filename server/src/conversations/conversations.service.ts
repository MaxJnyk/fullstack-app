import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IConversationsService } from './conversations';
import { CreateConversationParams } from '../utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Conversation, Participant, User } from '../utils/typeorm';
import { Repository } from 'typeorm';
import { Services } from '../utils/constants';
import { IParticipantService } from '../participants/participant';
import { IUserService } from '../users/user';
import { of } from 'rxjs';

@Injectable()
export class ConversationsService implements IConversationsService {
  constructor(
    @InjectRepository(Conversation)
    private readonly conversationRepository: Repository<Conversation>,
    @Inject(Services.PARTICIPANT)
    private readonly participantService: IParticipantService,
    @Inject(Services.USERS)
    private readonly userService: IUserService,
  ) {}

  async find(id: number) {
    return this.participantService.findParticipantConversations(id);
  }

  async findConversationById(id: number): Promise<Conversation> {
    return this.conversationRepository.findOne(id, {
      relations: ['participants'],
    });
  }

  async createConversation(user: User, params: CreateConversationParams) {
    const userDB = await this.userService.findUser({ id: user.id });
    const { authorId, recipientId } = params;
    const participants: Participant[] = [];
    if (!userDB.participant) {
      const participant = await this.participantService.createParticipant({
        id: authorId,
      });
      participants.push(participant);
    } else participants.push(userDB.participant);

    const recipient = await this.userService.findUser({ id: recipientId });
    if (!recipient)
      throw new HttpException('Recipient not found', HttpStatus.BAD_REQUEST);

    if (!recipient.participant) {
      const participant = await this.createParticipantAndSaveUser(
        recipient,
        recipientId,
      );
      participants.push(participant);
    } else participants.push(recipient.participant);

    const conversation = this.conversationRepository.create({
      participants,
    });
    return this.conversationRepository.save(conversation);
  }
  public async createParticipantAndSaveUser(user: User, id: number) {
    const participant = await this.participantService.createParticipant({ id });
    user.participant = participant;
    await this.userService.saveUser(user);
    return participant;
  }
}
