import { useEffect, useState } from "react";

const useIterator = () => {

    let [userList, setUsersList] = useState([]);
    let [idx, setIdx] = useState(0)
    let [currentUser, setCurrentUser] = useState({})
    let [loading, setLoading] = useState(false)

    useEffect (()  => {
        if (userList.length===0){
            getUsers()
        }
    },[])

    useEffect ( () => {
        if (Object.keys(userList).length>0){
            setCurrentUser(userList[idx].results[0])
        }
    },[userList,idx])


    const url = "https://randomuser.me/api";

    const getUsers = async () => {
        setLoading(true)
        try {
            const response = await fetch (url)
            const result = await response.json();
            await setUsersList([...userList, result])
            await setLoading(false)
        } catch (error) {
            console.log(error)
        }  
    }

    async function next (idx) {
        let tmp = idx+1
        if (userList.length<=tmp){
            await getUsers()
        }
        setIdx(tmp)
         setCurrentUser(userList[tmp].results[0])
    }

    function previous (idx) {
        let tmp = idx-1
        if (idx===0){
            return
        }
        setIdx(tmp)
        setCurrentUser(userList[tmp].results[0])
    }

     
  

    return [idx, userList, currentUser, previous, next, loading]
        
    
}

export default useIterator