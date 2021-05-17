import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Message } from './message.entity';

@Entity()
export class MessageParameter {
    @PrimaryColumn()
    @ManyToOne(type => Message, message => message.parameters)
    messageID: string;

    @PrimaryColumn()
    name: string;
}
