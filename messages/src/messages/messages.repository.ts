import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { RepositoryInterface } from 'src/common/repository';
import { Message } from './message.model';

@Injectable()
export class MessagesRepository implements RepositoryInterface {
  async getMessages() {
    return this.readMessages();
  }

  async getMessageById(id: string): Promise<Message> {
    const messages = await this.readMessages();
    const message = messages[id];

    if (!message) {
      throw new NotFoundException('Message was not found');
    }

    return message;
  }

  async createMessage(content: string) {
    const messages = await this.readMessages();
    const id = Math.floor(Math.random() * 999);

    const message: Message = {
      content,
      id,
    };

    messages[id] = message;

    return await writeFile('messages.json', JSON.stringify(messages, null, 2));
  }

  private async readMessages() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }
}
