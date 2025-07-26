# Frontend Environment Variables Setup

## 🎯 Overview

Your frontend needs to know where your backend API is located. This is done through environment variables.

## 🔧 Environment Variables

### Required Variable

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Your Railway backend URL | `https://your-backend.railway.app` |

## 🚀 Setup Instructions

### Step 1: Get Your Backend URL

1. Go to your Railway project dashboard
2. Find your backend service
3. Copy the public URL (e.g., `https://your-backend.railway.app`)

### Step 2: Set Environment Variable in Vercel

1. **Go to your Vercel project dashboard**
2. **Click on "Settings"**
3. **Go to "Environment Variables"**
4. **Add new variable**:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: Your Railway backend URL
   - **Environment**: Production (and Preview if you want)
5. **Click "Save"**

### Step 3: Redeploy

After adding the environment variable, Vercel will automatically redeploy your frontend.

## 🧪 Testing Environment Variables

### Option 1: Use the Test Component

Add the test component to your app temporarily:

```jsx
import EnvTest from './components/EnvTest';

// Add this to your App.js or any component
<EnvTest />
```

### Option 2: Check Browser Console

1. Open your deployed site
2. Open browser developer tools (F12)
3. Go to Console tab
4. You should see configuration logs

### Option 3: Test API Connection

Visit your backend health check directly:
`https://your-backend.railway.app/api/health`

## 🔍 Troubleshooting

### Environment Variable Not Set

**Symptoms:**
- API calls fail
- Console shows empty `REACT_APP_API_URL`
- Form submissions don't work

**Solution:**
1. Check Vercel environment variables
2. Make sure variable name is exactly `REACT_APP_API_URL`
3. Redeploy after setting the variable

### Wrong Backend URL

**Symptoms:**
- API calls return 404 or connection errors
- Health check fails

**Solution:**
1. Verify your Railway backend URL
2. Test the URL directly in browser
3. Update the environment variable with correct URL

### CORS Errors

**Symptoms:**
- Browser console shows CORS errors
- API calls fail with CORS policy errors

**Solution:**
1. Make sure your backend CORS configuration includes your Vercel domain
2. Check that `FRONTEND_URL` is set in your Railway backend

## 📱 Development vs Production

### Development (Local)
- Uses proxy configuration in `package.json`
- API calls go to `http://localhost:5000`
- No environment variables needed

### Production (Vercel)
- Uses `REACT_APP_API_URL` environment variable
- API calls go to your Railway backend
- Environment variable must be set in Vercel

## 🎯 Expected Behavior

### After Correct Setup:

1. **Environment Variable**: `REACT_APP_API_URL` is set to your Railway URL
2. **API Calls**: Form submissions work correctly
3. **Console Logs**: Show the correct API URL
4. **Health Check**: Returns successful response

### Example Console Output:
```
Frontend API Configuration:
REACT_APP_API_URL: https://your-backend.railway.app
apiBaseUrl: https://your-backend.railway.app
Environment: production
```

## 🔧 Configuration Files

### config.js
```javascript
const config = {
  apiBaseUrl: process.env.REACT_APP_API_URL || '',
  getApiUrl: (endpoint) => {
    const baseUrl = config.apiBaseUrl;
    if (baseUrl) {
      return `${baseUrl}${endpoint}`;
    }
    return endpoint;
  }
};
```

### package.json (Development Proxy)
```json
{
  "proxy": "http://localhost:5000"
}
```

## 🚨 Common Mistakes

1. **Wrong Variable Name**: Must be `REACT_APP_API_URL` (not `API_URL`)
2. **Missing HTTPS**: Use `https://` not `http://`
3. **Trailing Slash**: Don't add trailing slash to the URL
4. **Wrong Environment**: Make sure variable is set for Production environment

## 📞 Need Help?

1. **Check Vercel Build Logs** for environment variable issues
2. **Test Backend URL** directly in browser
3. **Use the EnvTest component** to debug configuration
4. **Check browser console** for error messages 