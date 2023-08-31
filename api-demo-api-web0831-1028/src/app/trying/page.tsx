// 輸入身分證跳轉到自己畫面

"use client";
import React, { useEffect, useState } from 'react';

const YourComponent: React.FC = () => {
    // API-ID
    const [apiData, setApiData] = useState<any>(null);
    const apiUrl = 'https://aiotservice.ndmctsgh.edu.tw/Wearable/api/v1/applewatch/basic/ID?ID=A123456789';
    const idValue = '';
    const fullUrl : string = `${apiUrl}?ID=${idValue}`;
    // `${apiUrl}?ID=${idValue}`

    // API-2




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
    }, []);

    return (
        <div>
            {/* API-ID */}
            <h2>API Response:</h2>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>

        </div>
    );
};

export default YourComponent;
