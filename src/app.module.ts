import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { StoreService } from './config/redux';

@Module({
  imports: [CoreModule],
  controllers: [AppController],
  providers: [AppService, StoreService],
})
export class AppModule {}
