// 輸入身分證跳轉到自己畫面

"use client";
import React, { useEffect, useState } from 'react';

const YourComponent: React.FC = () => {
    // API-ID
    const [apiData, setApiData] = useState<any>(null);
    const apiUrl = 'https://ailab.ndmctsgh.edu.tw/aiot_devteam/s/aad353c9ab5a781be2fe9/p/08014e36/api/v1/applewatch/basic/ID';
    const idValue = 'A123456789';
    const fullUrl = `${apiUrl}?ID=${idValue}`;
    // `${apiUrl}?ID=${idValue}`

    // API-2
    const [apiData2, setApiData2] = useState<any>(null);
    const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts';




    useEffect(() => {
        // API-ID
        fetch(fullUrl)
            .then(response => response.json())
            .then(data => {
                setApiData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        // API-2
        // 發送 API 請求
        fetch(apiUrl2)
            .then(response => response.json())
            .then(data => {
                setApiData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            {/* API-ID */}
            <h2>API Response:</h2>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>

            {/* API-2 */}
            <div className='bg-green-300'>
                <h2>API Response 2:</h2>
                <pre>{JSON.stringify(apiData, null, 2)}</pre>
            </div>
        </div>
    );
};

export default YourComponent;
