//http://localhost:3002/posts

// import React from 'react';

// ->原本練習內容
// export const metadata = {
//     title: 'API Demo',
//     description: 'Hi API',
//   }

// const Posts = () =>{
//     return <div>Posts</div>;

// };

// export default Posts;
// <-



// test API .tsx by GPT
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link'

// 1.改資料形態
interface Item {
  userId: string;
  id: number;
  title: string;
  body: string

  // test S
  data:string;
  
}

export default function Page() {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    // 發送 API 請求
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((apiData: Item[]) => {
        setData(apiData); // 將返回的數據存儲到 state 中
      })
      .catch(error => {
        console.error('API 請求失敗：', error);
      });
  }, []); // 空陣列作為第二個參數，確保只在組件初次渲染時執行一次

    return (
    <div>
      {/* 在這裡使用 data 來顯示 API 返回的數據 */}
      {/* 2.改資料形態 */}
      <ul>
        {data.map(item => (
          <li key={item.userId}>
            <p><b>userId:</b> {item.userId}</p>
            <p><b>id:</b> {item.id}</p>
            <p><b>title:</b> {item.title}</p>
            <p><b>body:</b> {item.body}</p>

            {/* test css */}
            <div className='bg-pink-600'>
              結果:
              {item.title}
            </div>

            <h5 className='text-center bg-green-200'>
              2023-04-06 14:15:10
              <br />
              {item.id}
            </h5>

            {/* 日期 時間 越新越上面 先進後出*/}
            <Link href=''>
              <div className='bg-blue-200 w-full flex justify-center items-center bg-green-middle text-black rounded-3xl p-2 my-1'>
                <h5 className='text-center '>
                  {/* 2023-04-06 14:15:10 */}
                  {item.data}
                </h5>
              </div>
            </Link>
          </li>


        ))}
      </ul>
    </div>
  );
}
