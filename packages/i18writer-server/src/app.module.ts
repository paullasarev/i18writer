import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';

@Module({
  imports: [
    MessagesModule,
    TypeOrmModule.forRoot(ormconfig),
    // MongooseModule.forRoot('mongodb://root:test@localhost/nest'),
    MongooseModule.forRoot('mongodb://nest:test@localhost/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
