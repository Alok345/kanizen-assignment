# Deployment Guide for Vercel

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Account**: Your code should be in a GitHub repository
3. **Backend Deployment**: Deploy your backend to a service like Railway, Render, or Heroku

## Frontend Deployment Steps

### 1. Prepare Your Repository

Make sure your frontend code is in a GitHub repository. The repository should have this structure:
```
frontend/
├── package.json
├── vercel.json
├── public/
├── src/
└── ...
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend` (if your frontend is in a subdirectory)
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

### 3. Environment Variables

After deployment, go to your project settings in Vercel and add these environment variables:

- **REACT_APP_API_URL**: Your backend API URL (e.g., `https://your-backend.railway.app`)

### 4. Deploy

Click "Deploy" and wait for the build to complete. Vercel will provide you with a URL for your deployed application.

## Backend Deployment

Since Vercel is primarily for frontend applications, you'll need to deploy your backend separately:

### Option 1: Railway (Recommended)
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Set the root directory to `backend`
4. Add environment variables for your database connection
5. Deploy

### Option 2: Render
1. Go to [render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Set the root directory to `backend`
5. Configure environment variables
6. Deploy

### Option 3: Heroku
1. Create a Heroku account
2. Install Heroku CLI
3. Create a new app
4. Deploy using Git

## Environment Variables for Backend

Make sure to set these environment variables in your backend deployment:

- `DB_HOST`: Your database host
- `DB_USER`: Database username
- `DB_PASSWORD`: Database password
- `DB_NAME`: Database name
- `PORT`: Port number (usually set automatically)

## Testing Your Deployment

1. Test the frontend by visiting your Vercel URL
2. Test form submissions to ensure they connect to your backend
3. Check that all static assets load correctly
4. Verify that the responsive design works on different devices

## Custom Domain (Optional)

1. In your Vercel project settings, go to "Domains"
2. Add your custom domain
3. Configure DNS settings as instructed by Vercel

## Troubleshooting

### Common Issues:

1. **Build Failures**: Check that all dependencies are in `package.json`
2. **API Connection Issues**: Verify the `REACT_APP_API_URL` environment variable is set correctly
3. **CORS Errors**: Ensure your backend allows requests from your Vercel domain
4. **Static Assets Not Loading**: Check that all files are in the correct directories

### Support:
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Railway Documentation: [docs.railway.app](https://docs.railway.app)
- Render Documentation: [render.com/docs](https://render.com/docs) 