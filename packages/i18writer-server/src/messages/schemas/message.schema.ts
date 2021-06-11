import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import {Language, MessageParameter} from '../entities/types';

@Schema()
export class Message {
    @Prop()
    messageID: string;

    @Prop()
    language: Language;

    @Prop()
    message: string;

    @Prop()
    parameters: MessageParameter[];
}

export type MessageDocument = Message & Document;

export const MessageSchema = SchemaFactory.createForClass(Message);