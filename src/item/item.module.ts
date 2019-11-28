import { Module } from '@nestjs/common';
import { StoreModule } from '@libs/store';
import { fromRoot } from '@core';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
  imports: [StoreModule.forRoot(fromRoot.rootReducer, fromRoot.rootEpic)],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
