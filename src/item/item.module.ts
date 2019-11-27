import { Module } from '@nestjs/common';
import { StoreModule } from '@libs/store';
import { rootReducer, rootEpic } from '@core';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
  imports: [StoreModule.forRoot(rootReducer, rootEpic)],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
