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
  }
};

export default config; 