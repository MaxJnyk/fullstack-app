import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { Routes, Services } from '../utils/constants';
import { AuthenticatedGuard } from '../auth/utils/Guards';
import { IConversationsService } from './conversations';
import { CreateConversationDto } from './dto/CreateConversation.dto';

@Controller(Routes.CONVERSATIONS)
@UseGuards(AuthenticatedGuard)
export class ConversationsController {
  constructor(
    @Inject(Services.CONVERSATIONS)
    private readonly conversationsService: IConversationsService,
  ) {}

  @Post()
  createConversation(@Body() creatConversationPayload: CreateConversationDto) {
    this.conversationsService.createConversation(creatConversationPayload);
  }
}
