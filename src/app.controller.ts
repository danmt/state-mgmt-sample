import { Controller, OnModuleInit } from '@nestjs/common';
import { StoreService } from '@libs/store';
import { fromRoot } from '@core';
import { Item } from '@models';

@Controller()
export class AppController implements OnModuleInit {
  constructor(private readonly store: StoreService<fromRoot.State>) {}

  onModuleInit() {
    this.store
      .select(fromRoot.selectItemsData)
      .subscribe((item: Item) => console.log('item', item));
  }
}
