import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipamentModule } from './equipament/equipament.module';

@Module({
  imports: [
    EquipamentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
