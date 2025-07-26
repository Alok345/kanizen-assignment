import React, { useState } from 'react';
import config from '../config';

const QuickTest = () => {
  const [testResult, setTestResult] = useState('');

  const testConfig = () => {
    const info = {
      REACT_APP_API_URL: process.env.REACT_APP_API_URL,
      apiBaseUrl: config.apiBaseUrl,
      testUrl: config.getApiUrl('/api/health'),
      environment: process.env.NODE_ENV
    };
    
    setTestResult(JSON.stringify(info, null, 2));
    
    // Also log to console
    console.log('🔧 Environment Test:', info);
  };

  const testBackend = async () => {
    try {
      const response = await fetch(config.getApiUrl('/api/health'));
      const data = await response.json();
      setTestResult(`✅ Backend OK: ${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      setTestResult(`❌ Backend Error: ${error.message}`);
    }
  };

  return (
    <div style={{ 
      padding: '15px', 
      margin: '10px', 
      border: '2px solid #ff6b6b', 
      borderRadius: '8px',
      backgroundColor: '#fff5f5'
    }}>
      <h4>🚨 Quick Environment Test</h4>
      
      <div style={{ marginBottom: '10px' }}>
        <button 
          onClick={testConfig}
          style={{
            padding: '8px 16px',
            backgroundColor: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Test Config
        </button>
        
        <button 
          onClick={testBackend}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4ecdc4',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Test Backend
        </button>
      </div>

      {testResult && (
        <div>
          <h5>Test Result:</h5>
          <pre style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '10px', 
            borderRadius: '4px',
            fontSize: '12px',
            overflow: 'auto'
          }}>
            {testResult}
          </pre>
        </div>
      )}

      <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
        <strong>Expected:</strong> REACT_APP_API_URL should show your Railway backend URL, not undefined or empty.
      </div>
    </div>
  );
};

export default QuickTest; 