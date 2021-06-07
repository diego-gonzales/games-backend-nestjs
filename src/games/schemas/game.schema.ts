import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

// Si queremos saber sobre ese type, leer: https://stackoverflow.com/questions/44079820/what-is-export-type-in-typescript
export type GameDocument = Game & Document;


@Schema()
export class Game {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop()
    imageURL: string;

    // @Prop()
    // price: number;

    @Prop({ default: Date.now })
    createdAt: Date;
};


export const GameSchema = SchemaFactory.createForClass(Game);