import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { EquipamentController } from './equipament.controller';
import { equipamentsProviders } from './equipament.providers';
import { EquipamentService } from './equipament.service';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    EquipamentController,
  ],
  providers: [
    EquipamentService,
    ...equipamentsProviders,
  ],
})
export class EquipamentModule { }
