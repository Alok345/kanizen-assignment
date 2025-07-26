# 🚨 IMMEDIATE FIX: Environment Variable Issue

## The Problem
Your form is trying to submit to `https://kanizen-assignment-foni.vercel.app/api/form` instead of your Railway backend.

## The Solution
Set the `REACT_APP_API_URL` environment variable in Vercel.

## Step-by-Step Fix

### 1. Get Your Railway Backend URL
1. Go to your Railway dashboard
2. Find your backend service
3. Copy the public URL (e.g., `https://your-backend.railway.app`)

### 2. Set Environment Variable in Vercel
1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Select your project**: `kanizen-assignment-foni`
3. **Go to Settings** (top right)
4. **Click "Environment Variables"** (left sidebar)
5. **Add new variable**:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: Your Railway backend URL (e.g., `https://your-backend.railway.app`)
   - **Environment**: Production ✅
   - **Environment**: Preview ✅ (optional)
6. **Click "Save"**

### 3. Redeploy
- Vercel will automatically redeploy after saving the environment variable
- Wait for deployment to complete

### 4. Test
1. Go to your deployed site
2. Look for the "🚨 Quick Environment Test" component
3. Click "Test Config" button
4. You should see your Railway URL in the result

## Expected Result
After fixing:
- ✅ `REACT_APP_API_URL` shows your Railway backend URL
- ✅ Form submits to Railway backend instead of Vercel
- ✅ No more 405 errors

## If You Don't Know Your Railway URL
1. Go to Railway dashboard
2. Find your backend service
3. Look for "Deployments" or "Settings"
4. Find the public URL (usually ends with `.railway.app`)

## Quick Test
The QuickTest component will show you:
- Current environment variable value
- What URL the form will submit to
- Whether the backend is accessible

## Remove Debug Component
After confirming it works, remove this line from App.js:
```jsx
<QuickTest />
``` 