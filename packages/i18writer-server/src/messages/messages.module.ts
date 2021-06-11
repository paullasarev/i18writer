import { Module } from '@nestjs/common';
// import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Message } from './entities/message.entity';
// import { MessageParameter } from './entities/message-parameter.entity';
import {MessagesServiceMongo} from "./messages.service.mongo";
import {MongooseModule} from "@nestjs/mongoose";
import {Message, MessageSchema} from "./schemas/message.schema";

@Module({
  controllers: [MessagesController],
  providers: [MessagesServiceMongo],
  // imports: [TypeOrmModule.forFeature([Message, MessageParameter])]
  imports: [MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }])],
})
export class MessagesModule {}
