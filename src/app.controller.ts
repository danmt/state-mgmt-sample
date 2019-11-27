import { Controller, OnModuleInit } from '@nestjs/common';
import { selectItemsTest } from './core/state';
import { StoreService } from './config/store';

@Controller()
export class AppController implements OnModuleInit {
  constructor(private readonly store: StoreService<any>) {}

  onModuleInit() {
    this.store
      .select(selectItemsTest)
      .subscribe(a => console.log('selector', a));
  }
}
