import express, {Request, Response } from "express"
import CharacterRepositoryImp from "../repository/characterRepositoyImp"
import CharacterController from "../controllers/charactersController"

const repository = new CharacterRepositoryImp()
const controller = new CharacterController(repository)
const characterRouter = express.Router()
const path = "/characters/"
characterRouter.get(path, (req: Request, res: Response) => controller.getCharacters(req, res))
characterRouter.get(`${path}:id`, (req: Request, res: Response) => controller.getCharacter(req, res))
characterRouter.post(`${path}n/u/post/`, (req: Request, res: Response) => controller.post(req, res))
characterRouter.put(`${path}n/u/put/:id`, (req: Request, res: Response) => controller.put(req, res))
characterRouter.delete(`${path}n/u/delete/:id`, (req: Request, res: Response) => controller.delete(req, res))
characterRouter.post(`${path}n/u/upload/:id`,)

export default characterRouter