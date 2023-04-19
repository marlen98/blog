export const getPageCount = (totalCount,limit)=>{
    return Math.ceil(totalCount/limit)
}
export const getPagesArr = (totalPages) => {
    let result=[]
    for (let index = 0; index < totalPages; index++) {
         result.push(index+1)
        }
     return result
    }