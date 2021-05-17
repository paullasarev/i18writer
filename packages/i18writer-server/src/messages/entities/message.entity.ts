import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Language } from './types';
import { MessageParameter } from './message-parameter.entity';

@Entity()
export class Message {
    @PrimaryColumn()
    messageID: string;

    @PrimaryColumn()
    language: Language;

    @Column()
    message: string;

    @OneToMany(type=> MessageParameter, parameter => parameter.messageID)
    parameters: MessageParameter[];
}
