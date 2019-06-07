import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { EquipamentModule } from './equipament/equipament.module';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [
    EquipamentModule,
    RecipeModule,
    BoardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
