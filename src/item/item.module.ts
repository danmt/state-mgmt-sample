import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { StoreModule } from '../config/store';
import { rootReducer, rootEpic } from '../core/state';

@Module({
  imports: [StoreModule.forRoot(rootReducer, rootEpic)],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
