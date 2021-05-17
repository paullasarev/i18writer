import { Language } from '../entities/types';

export class CreateMessageDto {
    messageID: string;
    language: Language;
    message: string;
}
