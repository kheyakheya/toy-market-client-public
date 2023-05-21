import { useEffect } from "react"

const useTitle=(title)=>{
    useEffect(()=>{
        document.title=`${title} - TOYOMOY`;
    },[title])
}
export default useTitle;