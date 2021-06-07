import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game, GameDocument } from './schemas/game.schema';

@Injectable()
export class GamesService {

  constructor( @InjectModel(Game.name) private gameModel: Model<GameDocument> ) { }


  async create(createGameDto: CreateGameDto): Promise<Game> {
    const createdGame = new this.gameModel(createGameDto);
    return await createdGame.save();
  };

  async findAll(): Promise<Game[]> {
    const games = await this.gameModel.find().exec();
    return games;
  };

  async findOne(id: string) {
    const game = await this.gameModel.findById(id);
    return game;
  };

  async update(id: string, updateGameDto: UpdateGameDto) {
    const gameUpdated = await this.gameModel.findByIdAndUpdate(id, updateGameDto, { new: true, useFindAndModify: false })
    return gameUpdated;
  };

  async remove(id: string) {
    const gameDeleted = await this.gameModel.findByIdAndRemove(id, {useFindAndModify: false});
    return gameDeleted;
  };

}
