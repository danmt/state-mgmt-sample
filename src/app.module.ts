import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { rootReducer, rootEpic } from './core/state';
import { StoreModule } from './config/store/store.module';

@Module({
  imports: [CoreModule, StoreModule.forRoot(rootReducer, rootEpic)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
