type Pagination = {
    currentPage:number,
    skip:number,
    totalPage:number,
    take:number
}
export function paginationHelper(page:number,total:number):Pagination{
    const take = 10
    const skip = page*take
    const currentPage = skip/take
    const totalPage = Math.round(total/10)
    return {
        currentPage,
        skip,
        totalPage,
        take
    }
}