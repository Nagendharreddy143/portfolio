#!/bin/bash
# Quick Deployment Script for GitHub

echo "🚀 Deploying to GitHub..."
echo ""

# Check git status
echo "📋 Current status:"
git status --short
echo ""

# Add all changes
echo "➕ Adding all changes..."
git add .
echo ""

# Show what will be committed
echo "📝 Files to be committed:"
git status --short
echo ""

# Commit
read -p "Enter commit message: " commit_msg
git commit -m "$commit_msg"
echo ""

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push origin main
echo ""

echo "✅ Done! Your code is now on GitHub."
echo ""
echo "📌 Next steps:"
echo "1. Go to vercel.com"
echo "2. Import your GitHub repository"
echo "3. Add environment variable: VITE_GEMINI_API_KEY"
echo "4. Deploy!"
echo ""
echo "See DEPLOYMENT.md for detailed instructions."
