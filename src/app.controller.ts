import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { StoreService } from './config/store';
import { selectItemsTest } from './core/state';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly store: StoreService) {}

  @Get()
  getHello(): string {
    this.store.select(selectItemsTest).subscribe((a) => console.log('selector', a));
    this.store.dispatch({ type: 'test' });
    return this.appService.getHello();
  }
}
