import React, { useState } from 'react';
import config from '../config';

const FormDebugger = () => {
  const [debugInfo, setDebugInfo] = useState({});
  const [testResult, setTestResult] = useState('');

  const runDiagnostics = async () => {
    const info = {
      // Environment variables
      REACT_APP_API_URL: process.env.REACT_APP_API_URL,
      NODE_ENV: process.env.NODE_ENV,
      
      // Configuration
      apiBaseUrl: config.apiBaseUrl,
      testUrl: config.getApiUrl('/api/health'),
      
      // Browser info
      userAgent: navigator.userAgent,
      online: navigator.onLine,
      
      // Timestamp
      timestamp: new Date().toISOString()
    };

    setDebugInfo(info);

    // Test API connection
    try {
      const response = await fetch(config.getApiUrl('/api/health'));
      const data = await response.json();
      
      setTestResult({
        status: response.status,
        ok: response.ok,
        data: data,
        error: null
      });
    } catch (error) {
      setTestResult({
        status: 'ERROR',
        ok: false,
        data: null,
        error: error.message
      });
    }
  };

  const testFormSubmission = async () => {
    const testData = {
      fullName: "Test User",
      email: "test@example.com",
      message: JSON.stringify({
        firstName: "Test",
        lastName: "User",
        phoneNumber: "123-456-7890",
        email: "test@example.com",
        dateOfBirth: "1990-01-01",
        dateOfDiagnosis: "2023-01-01",
        jobTitle: "Test Job",
        typeOfDiagnosis: "pleural-mesothelioma",
        story: "Test story",
        agreeToTerms: true,
        verifyHuman: true
      })
    };

    try {
      const response = await fetch(config.getApiUrl('/api/form'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });

      const result = await response.json();
      
      setTestResult({
        status: response.status,
        ok: response.ok,
        data: result,
        error: null,
        testType: 'form-submission'
      });
    } catch (error) {
      setTestResult({
        status: 'ERROR',
        ok: false,
        data: null,
        error: error.message,
        testType: 'form-submission'
      });
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      margin: '20px', 
      border: '2px solid #007bff', 
      borderRadius: '8px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>🔧 Form Submission Debugger</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={runDiagnostics}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Run Diagnostics
        </button>
        
        <button 
          onClick={testFormSubmission}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Test Form Submission
        </button>
      </div>

      {Object.keys(debugInfo).length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h4>🔍 Environment & Configuration:</h4>
          <pre style={{ 
            backgroundColor: '#fff', 
            padding: '15px', 
            borderRadius: '4px',
            fontSize: '12px',
            overflow: 'auto'
          }}>
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>
      )}

      {testResult && (
        <div>
          <h4>🧪 Test Results:</h4>
          <div style={{ 
            backgroundColor: testResult.ok ? '#d4edda' : '#f8d7da',
            padding: '15px',
            borderRadius: '4px',
            border: `1px solid ${testResult.ok ? '#c3e6cb' : '#f5c6cb'}`
          }}>
            <p><strong>Status:</strong> {testResult.status}</p>
            <p><strong>Success:</strong> {testResult.ok ? '✅ Yes' : '❌ No'}</p>
            {testResult.error && (
              <p><strong>Error:</strong> {testResult.error}</p>
            )}
            {testResult.data && (
              <div>
                <strong>Response Data:</strong>
                <pre style={{ fontSize: '12px', marginTop: '10px' }}>
                  {JSON.stringify(testResult.data, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '4px' }}>
        <h4>💡 Common Issues:</h4>
        <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
          <li><strong>Environment Variable Not Set:</strong> Check if REACT_APP_API_URL is configured in Vercel</li>
          <li><strong>Backend Not Running:</strong> Verify your Railway backend is deployed and running</li>
          <li><strong>CORS Issues:</strong> Check if backend allows requests from your Vercel domain</li>
          <li><strong>Network Issues:</strong> Check browser console for network errors</li>
          <li><strong>Form Validation:</strong> Ensure all required fields and checkboxes are completed</li>
        </ul>
      </div>
    </div>
  );
};

export default FormDebugger; 