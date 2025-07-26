// Configuration for API endpoints
const config = {
  // Use environment variable if available, otherwise fallback to proxy
  apiBaseUrl: process.env.REACT_APP_API_URL || '',
  
  // Helper function to get full API URL
  getApiUrl: (endpoint) => {
    const baseUrl = config.apiBaseUrl;
    if (baseUrl) {
      return `${baseUrl}${endpoint}`;
    }
    return endpoint; // Use relative URL for development with proxy
  },
  
  // Debug function to log current configuration
  debug: () => {
    console.log('Frontend API Configuration:');
    console.log('REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
    console.log('apiBaseUrl:', config.apiBaseUrl);
    console.log('Environment:', process.env.NODE_ENV);
  }
};

// Log configuration in development
if (process.env.NODE_ENV === 'development') {
  config.debug();
}

export default config; 