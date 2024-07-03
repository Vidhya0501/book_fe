import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Books from './Books';

function Home() {

    const [auth, setAuth] = useState(false);
  const [name, setName] = useState("")
  axios.defaults.withCredentials = true;

  useEffect(()=>{
    axios.get("http://localhost:8800")
    .then(res =>{
        if(res.data.Status == "Success"){
            setAuth(true)
            setName(res.data.name)
        }
        else{
            setAuth(false)
        }
    })
    .then(err=>console.log(err))
  }, [])

  const handleLogout =()=>{
    axios.get("http://localhost:8800/logout")
    .then(res =>{
        location.reload(true)
    })
    .catch(err=>console.log(err))
  }
  return (
   <>
   
   <div>
    {
        auth?
       <div>
         <div className="bg-secondary d-flex justify-content-between">
        <h4 className="p-2"> Book Shop</h4>
        <div>
        <h4>{name}</h4>
        <button onClick={handleLogout}>Logout</button>
            </div>
        </div>

        <Books/>
        </div>
        :
        <div>
            <h4>Unauthorized access</h4>
            </div>
    }
  
   </div>
   
   </>
  )
}

export default Home