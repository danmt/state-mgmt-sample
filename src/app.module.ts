import { Module } from '@nestjs/common';
import { StoreModule } from '@libs/store';
import { CoreModule, fromRoot } from '@core';
import { AppController } from './app.controller';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    CoreModule,
    StoreModule.forRoot(fromRoot.rootReducer, fromRoot.rootEpic),
    ItemModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
