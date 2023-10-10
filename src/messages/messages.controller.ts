import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService

  // Do not ue this in real world projects
  // Use  Dependency injection
  constructor() {
    this.messagesService = new MessagesService()
  }


  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content)
  }

  @Get('/:id')
 async getMessage(@Param('id') id: string) {
   const message = await this.messagesService.findOne(id)
   console.log(message);
   
   if(!message) {
    throw new NotFoundException('message not found')
   }
   return message
  }
}
