import { Message } from 'src/messages/message.model';

export interface RepositoryInterface {
  getMessages();

  getMessageById(id: string): Promise<Message>;

  createMessage(content: string);
}
