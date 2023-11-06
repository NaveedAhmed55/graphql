import React from 'react'
import {useQuery,gql} from '@apollo/client'
const  Get_All_Users=gql`
      query GetAllUsers{
    users {
      id
      name
      username
      age
      nationality
    }
}
    `
function Display() {
    
    const {data, loading, error}=useQuery(Get_All_Users)
    if(loading){
        <h1>Data loading........</h1>
    }
    if(data){
        console.log(data)
    }
    if(error){
        console.log(error)
    }
  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {data?.users && data.users.map((user)=>(<li>Name: {user.name}  Id: {user.id} username: {user.username}  age: {user.age}</li>))}
      </ul>
    </div>
  )
}

export default Display
