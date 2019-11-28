import { Injectable } from '@nestjs/common';
import { StoreService } from '@libs/store';
import { fromRoot } from '@core';

@Injectable()
export class ItemService {
  constructor(private readonly store: StoreService<fromRoot.State>) {}

  getHello(): string {
    this.store.dispatch({ type: 'test' });
    return 'Hello World!';
  }
}
