import { MessagesRepository } from "./messages.repository";

export class MessagesService {
     messagesRepository: MessagesRepository;
    constructor() {
        // Service is creating its own dependencies 
        // Do not do this in real App
        this.messagesRepository = new MessagesRepository()
    }

    findOne(id: string) {
        return this.messagesRepository.findOne(id);
    }

    findAll() {
        return this.messagesRepository.findAll();
    }

    create(content: string) {
        return this.messagesRepository.create(content);
    }
}