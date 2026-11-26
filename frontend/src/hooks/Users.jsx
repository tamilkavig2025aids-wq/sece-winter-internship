import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {Table,TableHeader,TableRow,TableBody,TableCell, TableHead} from '@/components/ui/table'
const Users = () => {
    const [users,setUsers]=useState([]);
  useEffect(()=>{
    const getUsers=async()=>{
    
    const response= await axios.get('https://jsonplaceholder.typicode.com/users',)
    setUsers(response.data);
    
    }
    const addUser=async()=>{
        const response= await axios.post('https://jsonplaceholder.typicode.com/users',{
            name:'Test',
            email:"text@gmai.com"
        }
    )
    console.log(response.data)
        
    }
    const deleteUser=async()=>{
        const response= await axios.post('https://jsonplaceholder.typicode.com/users')
        console.log("user deleted");
    }
        addUser();
        getUsers();
    
  },[])

  return (
    <div>
        <h1>Users Names</h1><hr />
        <Table>
            <TableHeader>
                <TableRow>
                   <TableHead>Name</TableHead>
                   <TableHead>Email</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {users.map((user)=>(
                    <TableRow>
                        <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <ul>
            {users.map((user) => {
                return (
                 <li>
                    Name-{user.name}<br />
                    Email: {user.email}<hr />
                 </li> 
                )  
            })}
        </ul>  
    </div>
  )
}

export default Users