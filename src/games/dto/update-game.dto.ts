import { PartialType } from '@nestjs/mapped-types';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {}

// EL partial type hace que esta clase (UpdateGameDTO) obtenga todas las propiedades de la clase
// CreateGameDTO, pero lo que lo diferencia es que no todas sus propiedades van a ser
// obligatorias, ya que al actualizar no siempre se actualizan todos los campos
// por eso que se hace uso de PartialType, para hacerlas opcionales (Ver más info en docs de NestJS)