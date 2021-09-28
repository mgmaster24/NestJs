import { Injectable } from '@nestjs/common';
import { Message } from './message.model';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private messagesRepo: MessagesRepository) {}

  getMessages() {
    return this.messagesRepo.getMessages();
  }

  getMessageById(id: string): Promise<Message> {
    return this.messagesRepo.getMessageById(id);
  }

  createMessage(content: string) {
    return this.messagesRepo.createMessage(content);
  }
}
