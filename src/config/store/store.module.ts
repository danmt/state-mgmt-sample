import { Module, DynamicModule } from '@nestjs/common';
import { Reducer } from 'redux';
import { Epic } from 'redux-observable';
import { createStoreForRootProviders } from './providers';
import { StoreService } from './services';

@Module({
  providers: [StoreService],
  exports: [StoreService],
})
export class StoreModule {
  public static forRoot(reducer: Reducer, epic: Epic): DynamicModule {
    const providers = createStoreForRootProviders(reducer, epic);

    return {
      module: StoreModule,
      providers,
      exports: providers,
    };
  }
}
