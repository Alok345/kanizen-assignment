import React, { useState, useEffect } from 'react';
import config from '../config';

const EnvTest = () => {
  const [apiStatus, setApiStatus] = useState('Testing...');
  const [configInfo, setConfigInfo] = useState({});

  useEffect(() => {
    // Log configuration info
    setConfigInfo({
      REACT_APP_API_URL: process.env.REACT_APP_API_URL,
      apiBaseUrl: config.apiBaseUrl,
      environment: process.env.NODE_ENV,
      testUrl: config.getApiUrl('/api/health')
    });

    // Test API connection
    const testApi = async () => {
      try {
        const response = await fetch(config.getApiUrl('/api/health'));
        if (response.ok) {
          const data = await response.json();
          setApiStatus(`✅ Connected: ${data.message}`);
        } else {
          setApiStatus(`❌ Error: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        setApiStatus(`❌ Connection failed: ${error.message}`);
      }
    };

    testApi();
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      margin: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>Environment Variables Test</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>Configuration:</h4>
        <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '4px' }}>
          {JSON.stringify(configInfo, null, 2)}
        </pre>
      </div>

      <div>
        <h4>API Connection Status:</h4>
        <p style={{ 
          fontWeight: 'bold',
          color: apiStatus.includes('✅') ? 'green' : 'red'
        }}>
          {apiStatus}
        </p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h4>Debug Info:</h4>
        <button 
          onClick={() => config.debug()}
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Log Config to Console
        </button>
      </div>
    </div>
  );
};

export default EnvTest; 