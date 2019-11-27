import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CoreModule } from './core/core.module';
import { rootReducer, rootEpic } from './core/state';
import { StoreModule } from './config/store';
import { ItemModule } from './item/item.module';

@Module({
  imports: [CoreModule, StoreModule.forRoot(rootReducer, rootEpic), ItemModule],
  controllers: [AppController],
})
export class AppModule {}
