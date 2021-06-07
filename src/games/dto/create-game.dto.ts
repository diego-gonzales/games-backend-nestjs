import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateGameDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    imageURL: string;

    // @IsNumber()
    // price: number;

    // A este le quite el decorador para que el ValidationPipe no marque error, ya que en nuestro esquema
    // le definimos un valor por defecto, y es optional de enviar en el body de la request
    // @IsDate()
    createdAt: Date;
};


// Para mas ejemplos, ver: https://github.com/typestack/class-validator/tree/develop/sample