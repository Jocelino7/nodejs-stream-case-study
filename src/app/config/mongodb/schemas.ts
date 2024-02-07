import mongoose, { Schema } from "mongoose";
// Clan DTO
export type ClanDTO = {
    name: string;
}
export type CharacterDTO = {
    firstName: string;
    lastName: string;
    abilities?: AbilityDTO[];
    clan?: ClanDTO; // Reference to ClanDTO
    age?: number | null;
    village: string;
    status: string;
    personality: string;
    description: string;
    team?: string | null;
    alive: boolean
}

export type AbilityDTO = {
    name: string;
}
//schemas
export const AbilitySchema = new mongoose.Schema<AbilityDTO>({
    name: String
})
export const ClanSchema = new mongoose.Schema<ClanDTO>(({
    name: { type: String, required: true },
}))

export const CharacterSchema: Schema<CharacterDTO> = new mongoose.Schema<CharacterDTO>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: Number,
    village: String,
    personality: String,
    description: String,
    status: String,
    alive: Boolean,
    team: String,
    abilities: [{ type: AbilitySchema }],
    clan: { type: ClanSchema },
})
//documents 

