import { Injectable } from '@nestjs/common';
import { StoreService } from '@libs/store';

@Injectable()
export class ItemService {
  constructor(private readonly store: StoreService<any>) {}

  getHello(): string {
    this.store.dispatch({ type: 'test' });
    return 'Hello World!';
  }
}
