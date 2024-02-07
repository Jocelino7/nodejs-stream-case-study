import { CharacterDTO } from "../../config/mongodb/schemas"
export type ResultType={
    results:CharacterDTO[],
    currentPage:number,
    totalPages:number
}