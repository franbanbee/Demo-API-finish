// 輸入身分證跳轉到自己畫面

"use client";
import React, { useEffect, useState } from 'react';

const YourComponent: React.FC = () => {
  const [apiData, setApiData] = useState<any>(null);
  const apiUrl = 'https://aiotservice.ndmctsgh.edu.tw/Wearable/api/v1/applewatch/basic/ID';
  const idValue = 'A123456789';
  const fullUrl = `${apiUrl}?ID=${idValue}`;
//   console.log (fullUrl);

  useEffect(() => {
    fetch(fullUrl)
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
      <h2>API Response:</h2>
      <pre>{JSON.stringify(apiData, null, 2)}</pre>
    </div>
  );
};

export default YourComponent;
