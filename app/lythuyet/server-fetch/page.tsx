import React from 'react'
async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
}
export default async function page() {
    const users = await getData();
  return (
    <div>tim nap du lieu server voi fetch
         {users.map((item:any)=>{
          return <li >{item.name}</li>
        })}
    </div>
  )
}
