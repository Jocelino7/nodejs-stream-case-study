type ErrorMessage = {
    serverError:string,
    badRequest:string
    notFound:string,
    forbidden:string,
    unauthorized:string
}
const Errors:ErrorMessage = {
    serverError:"Internal server error",
    badRequest:"bad request",
    notFound:"Not found",
    forbidden:"Forbidden",
    unauthorized:"Unauthorized"
}
export {Errors,ErrorMessage}