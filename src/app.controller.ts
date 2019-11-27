import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { selectItemsTest } from './core/state';
import { StoreService } from './config/store';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly store: StoreService<any>) {}

  @Get()
  getHello(): string {
    this.store.select(selectItemsTest).subscribe((a) => console.log('selector', a));
    this.store.dispatch({ type: 'test' });
    return this.appService.getHello();
  }
}
