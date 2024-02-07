import { Request, Response } from "express";
import { CharacterRepository } from "../repository/repository"
import { paginationHelper } from "../../config/paginationHelper";
import { CharacterDTO } from "../../config/mongodb/schemas";
export default class CharacterController {
    private repository: CharacterRepository
    constructor(repository: CharacterRepository) {
        this.repository = repository
    }
    async getCharacter(req: Request, res: Response) {
        const { id } = req.params
        const character = await this.repository.findOne(id)
        return res.json(
            {
                result: character
            }
        ).status(200)
    }
    async getCharacters(req: Request, res: Response) {
        try {
            const { query, page } = req.query
            if (!query) {
                const totalPage = await this.repository.total()
                const { page } = req.query
                const pagination = paginationHelper(page ? Number(page) : 0, totalPage)
                const characters = await this.repository.findMany(pagination.skip, pagination.take)
                return res.json({
                    results: characters,
                    currentpage: pagination.currentPage,
                    totalPage: pagination.totalPage
                }).status(200)
            }
            const results = await this.repository.search(query.toString(), page ? Number(page) : 0)
            return res.json(
                results
            )

        }
        catch (e) {
            console.log(e)
            res.sendStatus(500)
        }

    }
    async post(req: Request, res: Response) {
        try {
            const data: CharacterDTO | null = req.body
            if (!data)
                return res.sendStatus(400).send("Invalid Data Structure")
            const character = await this.repository.create(data)
            if (character)
                return res.sendStatus(201)
            return res.status(500).send("Error While creating character")
        }
        catch (e) {
            console.error(e)
            return res.sendStatus(500).send("Error While creating character")
        }
    }
    async put(req: Request, res: Response) {
        try {
            const data: CharacterDTO | undefined = req.body
            const { id } = req.params
            if (!data)
                return res.sendStatus(400).send("invalid data structure")
            const character = await this.repository.update(data, id)
            if (character)
                return res.sendStatus(201)
            res.status(500)
        }
        catch (e) {
            console.error(e)
            res.status(500)
        }
    }
    async delete(req: Request, res: Response) {
        const { id } = req.params
        try {
            await this.repository.delete(id)
            return res.sendStatus(200)
        }
        catch (e) {
            res.status(500).send("Error While Deleting  data")
        }

    }

}


