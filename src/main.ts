import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { StoreService } from '@libs/store';
import { fromRoot } from '@core';
import { Item } from '@models';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const store = app.get<StoreService<fromRoot.State>>(StoreService);
  store
    .select(fromRoot.selectItemsData)
    .subscribe((item: Item) => console.log('item', item));
  await app.listen(3000);
}
bootstrap();
