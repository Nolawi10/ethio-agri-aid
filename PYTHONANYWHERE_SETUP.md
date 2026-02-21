# PythonAnywhere Complete Setup Guide

## Step 1: Create PythonAnywhere Account

1. Go to https://www.pythonanywhere.com
2. Click **"Create a Free account"** (or choose a paid plan for better performance)
3. Fill in your details:
   - Username: Choose something memorable (this will be part of your URL)
   - Email: Use a valid email
   - Password: Create a strong password
4. Verify your email address

## Step 2: Clone Your Repository

1. Log into PythonAnywhere dashboard
2. Open a **Bash Console** (click "Consoles" → "Bash")
3. Navigate to your home directory:
   ```bash
   cd ~
   ```
4. Clone your repository:
   ```bash
   git clone https://github.com/Nolawi10/ethio-agri-aid.git
   ```
5. Navigate to your project:
   ```bash
   cd ethio-agri-aid
   ```

## Step 3: Set Up Python Virtual Environment

1. Create virtual environment:
   ```bash
   python3.10 -m venv venv
   ```
2. Activate it:
   ```bash
   source venv/bin/activate
   ```
3. Navigate to backend and install dependencies:
   ```bash
   cd backend
   pip install --user -r requirements.txt
   ```

## Step 4: Create Web Application

1. Go to **Web** tab in PythonAnywhere dashboard
2. Click **"Add a new web app"**
3. Choose **"Manual configuration"** (not the Flask wizard)
4. Select **Python 3.10** (or latest available)
5. Click **Next**

## Step 5: Configure Web App

### Set up paths:
- **Source code**: `/home/ethioagriaid/ethio-agri-aid/backend`
- **Working directory**: `/home/ethioagriaid/ethio-agri-aid/backend`

### Edit WSGI file:
1. Click the **WSGI configuration file** link
2. Replace the entire content with:
   ```python
   import sys
   import os

   # Add the backend directory to the path
   project_home = '/home/ethioagriaid/ethio-agri-aid/backend'
   if project_home not in sys.path:
       sys.path.insert(0, project_home)

   # Import the Flask app
   from wsgi import application
   ```
   (Replace `ethioagriaid` with your actual PythonAnywhere username)

## Step 6: Set Environment Variables

1. In the **Web** tab, scroll down to **Environment variables**
2. Add these variables:
   - **Name**: `JWT_SECRET_KEY` 
     **Value**: Generate one here: https://www.allkeysgenerator.com/Random/Security-Encryption-Key-Generator.aspx
   - **Name**: `FLASK_ENV`
     **Value**: `production`
   - **Name**: `ALLOWED_ORIGINS`
     **Value**: `https://ethioagriaid.pythonanywhere.com`

## Step 7: Configure Static Files (Optional but Recommended)

1. In the **Web** tab, find **Static files** section
2. Add a new entry:
   - **URL**: `/static/`
   - **Directory**: `/home/ethioagriaid/ethio-agri-aid/dist/`

## Step 8: Test and Reload

1. Click the green **Reload** button in the Web tab
2. Your app should be live at: `https://ethioagriaid.pythonanywhere.com`
3. Test the health endpoint: `https://ethioagriaid.pythonanywhere.com/api/health`

## Step 9: Troubleshooting

If something goes wrong:

1. **Check error logs**: In Web tab, click **Error log**
2. **Common issues**:
   - Module not found: Make sure you installed requirements
   - Permission denied: Check file permissions
   - CORS errors: Verify ALLOWED_ORIGINS setting

## Step 10: Update Your App (Future)

When you make changes:

1. In Bash console:
   ```bash
   cd ~/ethio-agri-aid
   git pull origin main
   ```
2. If you changed frontend, rebuild locally and upload dist folder
3. In Web tab, click **Reload**

## Quick Commands Summary

```bash
# Clone repo
cd ~
git clone https://github.com/Nolawi10/ethio-agri-aid.git
cd ethio-agri-aid

# Setup environment
python3.10 -m venv venv
source venv/bin/activate
cd backend
pip install --user -r requirements.txt

# Future updates
cd ~/ethio-agri-aid
git pull origin main
```

## Important Notes

- Replace `ethioagriaid` with your actual PythonAnywhere username everywhere
- Generate a strong JWT_SECRET_KEY (use the link provided)
- Free tier has limitations (CPU time, storage)
- Your app URL will be: `https://ethioagriaid.pythonanywhere.com`
- Database will be created automatically in your home directory

## Success Checklist

- [ ] Account created and verified
- [ ] Repository cloned successfully
- [ ] Virtual environment created
- [ ] Dependencies installed
- [ ] Web app created
- [ ] WSGI file configured
- [ ] Environment variables set
- [ ] Static files configured (optional)
- [ ] App reloaded and working
- [ ] Health endpoint responding

Once you complete these steps, your Ethio Agri Aid app will be live on PythonAnywhere!
