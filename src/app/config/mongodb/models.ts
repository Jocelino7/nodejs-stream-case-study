import mongoose, { Model, model } from "mongoose";
import { CharacterDTO, CharacterSchema, ClanDTO, ClanSchema } from "./schemas";

export const CharacterModel:Model<CharacterDTO> =  mongoose.model("Character",CharacterSchema)
export const ClanModel:Model<ClanDTO> = model("Clan",ClanSchema)

