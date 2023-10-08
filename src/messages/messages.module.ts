import { Get, Module, Post } from '@nestjs/common';
import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController]
})
export class MessagesModule {


}
