import { Controller, Get, Post, Body, Param, Delete, Put, HttpStatus, HttpException, ValidationPipe } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Controller('games')
export class GamesController {

  constructor(private readonly gamesService: GamesService) {}

  // Nota: los validations pipes funcionan solo cuando se ponen los decoradores del class-validator library en nuestros DTOs

  @Post()
  async create(@Body(new ValidationPipe()) createGameDto: CreateGameDto) {
    const gameCreated = await this.gamesService.create(createGameDto);

    return {
      message: 'Game created successfully',
      statusCode: HttpStatus.CREATED,
      game: gameCreated
    }
  };

  @Get()
  async findAll() {
    const games = await this.gamesService.findAll();

    return {
      message: 'OK',
      statusCode: HttpStatus.OK,
      games
    };
  };

  @Get(':id')
  async findOne(@Param('id', new ValidationPipe()) id: string) {
    const gameFounded = await this.gamesService.findOne(id);

    if(!gameFounded) throw new HttpException('Game does not exists', HttpStatus.NOT_FOUND);

    return {
      message: 'OK',
      statusCode: HttpStatus.OK,
      game: gameFounded
    };
  };

  @Put(':id')
  async update(@Param('id') id: string, @Body(new ValidationPipe()) updateGameDto: UpdateGameDto) {
    const gameUpdated = await this.gamesService.update(id, updateGameDto);

    if (!gameUpdated) throw new HttpException('Game does not exists', HttpStatus.NOT_FOUND);

    return {
      message: 'Game updated successfully',
      statusCode: HttpStatus.OK,
      game: gameUpdated
    };
  };

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const gameDeleted = await this.gamesService.remove(id);

    if (!gameDeleted ) throw new HttpException('Game does not exists', HttpStatus.NOT_FOUND)

    return {
      message: 'Game deleted successfully',
      statusCode: HttpStatus.OK,
      game: gameDeleted
    };
  };

}


// ESTA ES OTRA MANERA DE MANEJAR LOS EXCEPCIONES (Video de FAZT)
  // @Get(':id')
  // async findOne(@Param('id') id: string, @Res({ passthrough: true }) res: Response) {
  //   const game = await this.gamesService.findOne(id);
  //   if (!game) {
  //     return res.status(HttpStatus.NOT_FOUND);
  //   };
  //   // if (!game) throw new NotFoundException('Product does not exists');

  //   return game;
  // }