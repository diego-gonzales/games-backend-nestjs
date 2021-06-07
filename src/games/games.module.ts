import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Game, GameSchema } from './schemas/game.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }])
  ],
  controllers: [GamesController],
  providers: [GamesService],
  exports: [
    // MongooseModule // esto es en caso de que queramos usar el modelo en otro modulo
  ]
})
export class GamesModule {}
