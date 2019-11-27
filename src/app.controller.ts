import { Controller, OnModuleInit } from '@nestjs/common';
import { StoreService } from '@libs/store';
import { selectItemsTest } from '@core';

@Controller()
export class AppController implements OnModuleInit {
  constructor(private readonly store: StoreService<any>) {}

  onModuleInit() {
    this.store
      .select(selectItemsTest)
      .subscribe(a => console.log('selector', a));
  }
}
