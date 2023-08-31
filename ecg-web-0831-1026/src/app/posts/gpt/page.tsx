import React, { useState } from 'react';
import axios from 'axios';

const HealthCheckPage = () => {
  const [idCard, setIdCard] = useState('');
  const [healthCheckRecords, setHealthCheckRecords] = useState([]);

  const fetchHealthCheckRecords = async () => {
    try {
      const response = await axios.get('/health-checks', {
        params: {
          idCard: idCard
        }
      });

      setHealthCheckRecords(response.data.records);
    } catch (error) {
      console.error('Error fetching health check records:', error);
    }
  };

  return (
    <div>
      <h2>Health Check Records</h2>
      <input
        type="text"
        placeholder="Enter ID Card Number"
        value={idCard}
        onChange={(e) => setIdCard(e.target.value)}
      />
      <button onClick={fetchHealthCheckRecords}>Fetch Records</button>

      <h3>Health Check Records:</h3>
      <ul>
        {healthCheckRecords.map((record, index) => (
          <li key={index}>
            <strong>Date:</strong> {record.date}<br />
            <strong>Description:</strong> {record.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthCheckPage;
