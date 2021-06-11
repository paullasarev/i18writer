import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Message, MessageDocument} from "./schemas/message.schema";
import {Model} from "mongoose";
import {CreateMessageDto} from "./dto/create-message.dto";
import {UpdateMessageDto} from "./dto/update-message.dto";

@Injectable()
export class MessagesServiceMongo {
    constructor(@InjectModel(Message.name) private messageModel: Model<MessageDocument>) {}

    async create(createMessageDto: CreateMessageDto): Promise<Message> {
        const createdMessage = new this.messageModel(createMessageDto);
        return createdMessage.save();
    }

    async findAll(): Promise<Message[]> {
        // return this.messageModel.find().exec();
        console.log('findAll')
        const result = await this.messageModel.find({});
        console.log({result});
        return result;
    }

    async findOne(id: string): Promise<Message> {
        return this.messageModel.findById(id).exec();
    }

    async update(id: string, updateMessageDto: UpdateMessageDto): Promise<Message> {
        return this.messageModel.findByIdAndUpdate(id, updateMessageDto);
    }

    async remove(id: string): Promise<Message> {
        return this.messageModel.findByIdAndRemove(id);
    }

}