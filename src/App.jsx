import { useEffect, useState } from "react"
import useIterator from "./Hooks/useIterator"

function App() {

  const [idx, userList, currentUser, previous, next, loading] = useIterator()

  let [fullName, setFullName] = useState("")
  let [picture,setPicture] = useState("")

  useEffect ( () => {
    if (Object.keys(userList).length>0){
      let {title, first, last} = currentUser.name
      setFullName(`${title} ${first} ${last}`)
      setPicture(currentUser.picture.medium)
    }
},[currentUser])
 

  return (
    <div>

      <h1>Live coding interview</h1>
      <p>1. Create a custom React Hook to fetch users form an API (https://randomuser.me/api) and display their ppicture and name on the page.</p>
      <p>2. It must return the list of users, the current user, a function to fetch the nextt user and a function to move back to the previous user</p>
      <p>You have 45 minutes to do this task</p>


      { !loading ? 
        <figure>
          <img src={picture} alt="hero"></img>

          <figcaption>
            <p>{fullName}</p>
          </figcaption>
        </figure>
      : 
        <div>
            LOADING
        </div>
      }

      <div>
        <button onClick={ () => previous(idx)}>Previous</button>
        <button onClick={ () => next(idx)}>next</button>
      </div>

    </div>
  )
}

export default App
