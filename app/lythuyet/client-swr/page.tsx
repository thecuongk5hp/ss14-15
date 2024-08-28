"use client"
import useSWR from 'swr'
import axios from 'axios'

const getData = (url: string) =>
    axios.get(url)
    .then(res => res.data)

export default function Page() {
    const { data, error } = useSWR('http://jsonplaceholder.typicode.com/users', getData)
    
    if (error) return <div>Quá trình lấy dữ liệu thất bại :(</div>
        console.log("gia tri data111",data);
    if (!data) return <div>Đang tải dữ liệu...</div>

    return (
        <div>
            Fetching data với thư viện SWR
            {data.map((item: any) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </div>
    );
}