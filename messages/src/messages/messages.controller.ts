import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { Message } from './message.model';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  async getMessages() {
    return this.messagesService.getMessages();
  }

  @Get('/:id')
  async getMessageById(@Param('id') id: string): Promise<Message> {
    return this.messagesService.getMessageById(id);
  }

  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.createMessage(createMessageDto.content);
  }
}
