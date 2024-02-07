import { ResultType } from "../types/result";
import { paginationHelper } from "../../config/paginationHelper";
import { CharacterRepository } from "./repository";
import { CharacterDTO } from "../../config/mongodb/schemas";
import { CharacterModel } from "../../config/mongodb/models";
export default class CharacterRepositoryImp implements CharacterRepository {
    characterModel = CharacterModel
    async findOne(id: string): Promise<CharacterDTO | null> {

        return await this.characterModel.findById(id)
    }

    async findMany(skip: number, take: number): Promise<CharacterDTO[]> {
        return await this.characterModel.find().skip(skip).limit(take)

    }
    async search(value: string, page: number): Promise<ResultType> {
        const take = 10
        const skip = page * take
        const filter = { $or: [{ firstName: { RegExp: value } }, { lastName: { RegExp: value } }] }
        const count = await this.characterModel.countDocuments(filter)
        const pagination = paginationHelper(page, count)
        console.log(count)
        const results = await this.characterModel.find({ $or: [{ firstName: { RegExp: value } }, { lastName: { RegExp: value } }] }).skip(skip).limit(take)
        return {
            results,
            currentPage: pagination.currentPage,
            totalPages: pagination.totalPage
        }
    }
    async create(character: CharacterDTO): Promise<boolean> {
        try {
            await this.characterModel.create(character)
            return true
        }
        catch (e) {
            console.error(e)
            return false
        }

    }
    async update(character: CharacterDTO, id: string): Promise<boolean> {
        try {
            await this.characterModel.updateOne({_id:id},{set:character})
            return true
        }
        catch (e) {
            console.error(e)
            return false
        }
    }
    async delete(id: string): Promise<boolean> {
        try {
            await this.characterModel.deleteOne({_id:id})
            return true

        }catch(e){
            console.error(e)
            return false
        }
        
    }
    async total(): Promise<number> {
        return await this.characterModel.countDocuments()
    }

}