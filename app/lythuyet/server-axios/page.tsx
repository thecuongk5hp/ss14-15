import React from 'react'
import axios from 'axios'
async function getData(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log("gia tri cua res",res);
    return res.data;
}
getData();
export default async function page() {
    const users = await getData();
    return (
    <div>
        {users.map((item:any) => {
            return <li>{item.name}</li>
        })}
    </div>
  )
}
