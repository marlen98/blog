import  {useState} from "react";

 export const useFetching = (callback)=>{
    const [isPostLoad, setIsPostLoad] = useState(false)
    const [error,setError] = useState ('')
const fetching = async ()=>{
try{setIsPostLoad(true)
await callback()}
catch(error){setError(error.message)}
finally {setIsPostLoad(false)}
}
return [fetching,isPostLoad,error]
}
