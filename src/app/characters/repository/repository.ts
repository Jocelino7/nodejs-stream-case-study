import { ResultType } from "../types/result";
import { CharacterDTO } from "../../config/mongodb/schemas";
export interface CharacterRepository{
    findOne(id:string):Promise<CharacterDTO|null>
    findMany(page:number,take:number):Promise<CharacterDTO[]>
    search(value:string,page:number):Promise<ResultType>
    create(character:CharacterDTO):Promise<boolean>
    update(character:CharacterDTO,id:string):Promise<boolean>
    delete(id:string):Promise<boolean>
    total():Promise<number>
}