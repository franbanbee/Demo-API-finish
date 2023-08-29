// 前端API
import { NextResponse } from "next/server";

// http://localhost:3002/api/posts/1

const url = 'https://jsonplaceholder.typicode.com/posts';
// NextResponse
export const GET = async (_, { params }) => {
    const id = params.id;
    try {
        // const response = await fetch(url);  原本固定的 下面改成動態抓取
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error.message })
    }
}

// PUT更新
export const PUT = async (_,{params}) => {
    const id = params.id;
    try {
        const response = await fetch(`${url}/${id}`,{
            method : "PUT",
            headers : {
                "Content-type" : "application/json; charset=UTF-8"
            },
            body : JSON.stringify({
                id : 1,
                title : 'hi',
                body : 'world',
                userId : 'Admin'
            })
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({message : error.message})
    }
}

// PATCH部分更新
export const PATCH = async (_,{params}) => {
    const id = params.id;
    try {
        const response = await fetch(`${url}/${id}`,{
            method : "PATCH",
            headers : {
                "Content-type" : "application/json; charset=UTF-8"
            },
            body : JSON.stringify({
                title : 'Hello',
            })
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({message : error.message})
    }
}

// DELETE刪除
export const DELETE = async (_,{params}) => {
    const id = params.id;
    try {
        const response = await fetch(`${url}/${id}`,{
            method : "DELETE",
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({message : error.message})
    }
}