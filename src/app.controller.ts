import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { StoreService } from './config/redux';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly store: StoreService) {}

  @Get()
  getHello(): string {
    this.store.dispatch({ type: 'test' });
    return this.appService.getHello();
  }
}
