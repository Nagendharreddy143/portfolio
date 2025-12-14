# 🚀 Deployment Guide - GitHub & Vercel

This guide will help you deploy your portfolio to Vercel.

## 📋 Prerequisites

- ✅ Git repository initialized (Done!)
- ✅ GitHub repository connected (Done!)
- ✅ Vercel account (Create at [vercel.com](https://vercel.com) if you don't have one)

---

## 🔐 Important: Security Check

**CRITICAL**: Before pushing to GitHub, ensure your API key is NOT in the code!

✅ **Already Done**:
- API key is in `.env.local` (which is gitignored)
- Using environment variable `VITE_GEMINI_API_KEY`
- Test files are gitignored

---

## 📤 Step 1: Push to GitHub

Run these commands in your terminal:

```bash
# Add all changes
git add .

# Commit with a message
git commit -m "Fixed Gemini AI integration with Gemma model"

# Push to GitHub
git push origin main
```

If you get any errors about untracked files or conflicts, let me know!

---

## 🌐 Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `Nagendharreddy143/portfolio`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should be auto-detected)
   - **Output Directory**: `dist` (should be auto-detected)

4. **Add Environment Variable** ⚠️ **IMPORTANT**
   - Click "Environment Variables"
   - Add:
     - **Name**: `VITE_GEMINI_API_KEY`
     - **Value**: `AIzaSyCe5xve0ot6-NvMAmmyDwGMjqDlld_sbZQ`
   - Click "Add"

5. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for deployment to complete
   - You'll get a live URL like `https://your-portfolio.vercel.app`

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? portfolio (or your choice)
# - Directory? ./ (press Enter)
# - Override settings? No

# Add environment variable
vercel env add VITE_GEMINI_API_KEY

# When prompted, paste: AIzaSyCe5xve0ot6-NvMAmmyDwGMjqDlld_sbZQ
# Select: Production, Preview, Development (all)

# Deploy to production
vercel --prod
```

---

## ✅ Step 3: Verify Deployment

1. **Visit your live site**
   - Open the Vercel URL
   - Test the AI chat feature
   - Check all sections work properly

2. **Test AI Chat**
   - Click on the AI chat button
   - Send a message like "Who is Nagendhar?"
   - Verify you get a response

3. **Check Console**
   - Open browser DevTools (F12)
   - Check for any errors in the Console tab

---

## 🔄 Future Updates

Every time you make changes:

```bash
# Add and commit changes
git add .
git commit -m "Your update message"
git push origin main
```

Vercel will **automatically redeploy** when you push to GitHub! 🎉

---

## 🐛 Troubleshooting

### AI Chat Not Working on Vercel

**Problem**: AI returns error messages

**Solution**: 
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Verify `VITE_GEMINI_API_KEY` is set correctly
3. Redeploy: Deployments → Click "..." → Redeploy

### Build Fails

**Problem**: Deployment fails during build

**Solution**:
1. Check build logs in Vercel dashboard
2. Make sure `package.json` has correct scripts
3. Verify all dependencies are in `package.json`

### 404 Errors on Page Refresh

**Problem**: Getting 404 when refreshing pages

**Solution**: Create `vercel.json` in root:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 📞 Need Help?

If you encounter any issues during deployment, share:
1. The error message
2. Which step you're on
3. Screenshot if helpful

---

## 🎉 Success Checklist

- [ ] Pushed code to GitHub
- [ ] Connected GitHub to Vercel
- [ ] Added environment variable in Vercel
- [ ] Deployment successful
- [ ] AI chat works on live site
- [ ] All sections display correctly
- [ ] No console errors

---

**Ready to deploy? Start with Step 1!** 🚀
