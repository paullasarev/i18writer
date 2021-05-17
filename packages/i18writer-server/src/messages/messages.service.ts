import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(@InjectRepository(Message) private messageRepository: Repository<Message>) {
  }
  create(createMessageDto: CreateMessageDto): Promise<Message> {
    const message = this.messageRepository.create(createMessageDto);
    return this.messageRepository.save(message);
  }

  findAll(): Promise<Message[]> {
    return this.messageRepository.find();
  }

  findOne(id: string): Promise<Message> {
    return this.messageRepository.findOneOrFail(id);
  }

  async update(id: string, updateMessageDto: UpdateMessageDto): Promise<Message> {
    const oldMessage = await this.findOne(id);
    const message: Message = {...oldMessage, ...updateMessageDto};
    return this.messageRepository.save(message);
  }

  async remove(id: string): Promise<Message> {
    const message = await this.findOne(id);
    return this.messageRepository.remove(message);
  }
}
