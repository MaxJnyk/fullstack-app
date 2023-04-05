import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Routes, Services } from '../utils/constants';
import { AuthenticatedGuard } from '../auth/utils/Guards';
import { IConversationsService } from './conversations';
import { CreateConversationDto } from './dto/CreateConversation.dto';
import { AuthUser } from '../utils/decorators';
import { User } from '../utils/typeorm';

@Controller(Routes.CONVERSATIONS)
@UseGuards(AuthenticatedGuard)
export class ConversationsController {
  constructor(
    @Inject(Services.CONVERSATIONS)
    private readonly conversationsService: IConversationsService,
  ) {}

  @Post()
  async createConversation(
    @AuthUser() user: User,
    @Body() creatConversationPayload: CreateConversationDto,
  ) {
    return this.conversationsService.createConversation(
      user,
      creatConversationPayload,
    );
  }
  @Get()
  getConversations(@AuthUser() user: User) {
    return this.conversationsService.find(user.id);
  }
  @Get(':id')
  async getConversationById(@Param('id') id: number) {
    return await this.conversationsService.findConversationById(id);
  }
}
