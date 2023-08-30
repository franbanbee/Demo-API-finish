

// 前端API
//http://localhost:3002/api/posts

import { NextRequest, NextResponse } from "next/server";

const url = 'https://jsonplaceholder.typicode.com/posts';

// GET讀取
export const GET = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({message : error.message})
    }

}

// http://localhost:3002/api/posts/1 GET動態[id]

// POST新增
export const POST = async (req) => {
    const {userId,title,body} = await req.json();
    try {
        const response = await fetch(url,{
            method : "POST",
            headers : {
                "Content-type" : "application/json; charset=UTF-8"
            },
            body : JSON.stringify({
                userId,
                title,
                body
            })
        });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({message : error.message})
    }
}

// 一定要雙引號 userID的i是大寫
// {
//     "userId": 999,
//     "title": "Hi",
//     "body": "world",
//     "id": 101
//   }

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
// 只改title "Hello"
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