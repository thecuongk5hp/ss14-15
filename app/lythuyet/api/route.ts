import { NextResponse } from "next/server";
let users=[
    {
        id:1,
        name:"phuong hoa",
        address:"HCM",
    },
    {
        id:2,
        name:"phong van",
        address:"HN",
    },
    {
        id:3,
        name:"Xuan phap",
        address:"BG",
    },
]
export async function GET () {
    return NextResponse.json(users);
}