# 🚀 Quick Start - Deploy Now!

## Step 1: Push to GitHub

Copy and paste these commands one by one:

```bash
# Add all changes
git add .

# Commit changes
git commit -m "Fixed AI chat with Gemma model and added deployment docs"

# Push to GitHub
git push origin main
```

---

## Step 2: Deploy to Vercel

### Using Vercel Dashboard (Easiest):

1. **Go to** [vercel.com](https://vercel.com) and sign in with GitHub

2. **Click** "Add New..." → "Project"

3. **Select** your repository: `Nagendharreddy143/portfolio`

4. **Click** "Import"

5. **Add Environment Variable**:
   - Click "Environment Variables"
   - Name: `VITE_GEMINI_API_KEY`
   - Value: `AIzaSyCe5xve0ot6-NvMAmmyDwGMjqDlld_sbZQ`
   - Click "Add"

6. **Click** "Deploy"

7. **Wait** 1-2 minutes

8. **Done!** 🎉 You'll get a live URL

---

## ⚠️ IMPORTANT

**Your API key is safe!**
- ✅ It's in `.env.local` (not pushed to GitHub)
- ✅ Test files are ignored
- ✅ Only environment variable name is in the code

**After deployment:**
- Test the AI chat on your live site
- If it doesn't work, check Vercel → Settings → Environment Variables

---

## 🔄 Future Updates

Every time you make changes:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

Vercel auto-deploys! 🚀

---

**Need detailed help?** See `DEPLOYMENT.md`
