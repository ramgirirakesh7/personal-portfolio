# Rakesh Ramgiri - Portfolio Website

A modern, responsive portfolio website showcasing full-stack development skills and professional experience.

## 🚀 **Quick Deployment Options**

### **Option 1: GitHub Pages (FREE & Easiest)**

1. **Create a GitHub Repository:**
   ```bash
   # Go to GitHub.com and create a new repository named "portfolio"
   # Or use your existing repository
   ```

2. **Upload your files to GitHub:**
   ```bash
   # If you have Git installed:
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Your site will be live at:** `https://YOUR_USERNAME.github.io/portfolio`

### **Option 2: Netlify (FREE & Professional)**

1. **Go to [Netlify.com](https://netlify.com)**
2. **Sign up/Login with GitHub**
3. **Click "New site from Git"**
4. **Choose your portfolio repository**
5. **Deploy settings:**
   - Build command: (leave empty)
   - Publish directory: `personal-portfolio` (or just `.` if files are in root)
6. **Click "Deploy site"**
7. **Your site will be live at:** `https://your-site-name.netlify.app`

### **Option 3: Vercel (FREE & Fast)**

1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up/Login with GitHub**
3. **Click "New Project"**
4. **Import your portfolio repository**
5. **Deploy settings:**
   - Framework Preset: Other
   - Root Directory: `personal-portfolio` (or just `.`)
6. **Click "Deploy"**
7. **Your site will be live at:** `https://your-project.vercel.app`

### **Option 4: AWS S3 + CloudFront (Professional)**

1. **Create S3 Bucket:**
   - Go to AWS S3 Console
   - Create bucket named `your-portfolio-website`
   - Enable "Static website hosting"
   - Set index document: `index.html`

2. **Upload files:**
   - Upload all files from `personal-portfolio/` folder
   - Set public read permissions

3. **Configure CloudFront (Optional):**
   - Create CloudFront distribution
   - Point to your S3 bucket
   - Get your custom domain

## 🌐 **Custom Domain Setup**

### **For GitHub Pages:**
1. **Buy a domain** (e.g., from Namecheap, GoDaddy, Google Domains)
2. **In GitHub repository settings:**
   - Go to "Pages" section
   - Add your custom domain
   - Enable "Enforce HTTPS"

3. **Configure DNS:**
   - Add CNAME record: `yourdomain.com` → `YOUR_USERNAME.github.io`
   - Add CNAME record: `www.yourdomain.com` → `YOUR_USERNAME.github.io`

### **For Netlify/Vercel:**
1. **In your deployment platform:**
   - Go to "Domain settings"
   - Add custom domain
   - Follow DNS configuration instructions

## 📱 **SEO & Performance**

Your portfolio includes:
- ✅ **Meta tags** for social sharing
- ✅ **Open Graph** tags for LinkedIn/Facebook
- ✅ **Responsive design** for all devices
- ✅ **Fast loading** with optimized assets
- ✅ **Accessibility** features

## 🔧 **Local Development**

```bash
# Navigate to portfolio directory
cd personal-portfolio

# Start local server (if Python is installed)
python -m http.server 8000

# Or use Node.js (if installed)
npx serve .

# Open in browser
open http://localhost:8000
```

## 📝 **Customization**

### **Update Personal Information:**
- Edit `index.html` to update your details
- Replace `images/profile-photo.jpg` with your photo
- Update contact information and social links

### **Add Projects:**
- Edit the projects section in `index.html`
- Add your GitHub repositories, live demos, etc.

### **Change Colors/Theme:**
- Edit CSS variables in `styles.css`:
  ```css
  :root {
    --accent: #06b6d4;        /* Main accent color */
    --bg: #0a0f1c;           /* Background color */
    --card: #0f172a;         /* Card background */
  }
  ```

## 📧 **Contact Form Setup**

The resume request form uses FormSubmit.co:
- ✅ **No setup required** - works out of the box
- ✅ **Emails sent to:** ramgirirakesh77@gmail.com
- ✅ **Spam protection** included

## 🚀 **Recommended Deployment Path**

**For beginners:** Start with **GitHub Pages** (free, easy, professional)
**For professionals:** Use **Netlify** or **Vercel** (free tier, custom domains, analytics)

## 📞 **Need Help?**

If you encounter any issues:
1. Check the browser console for errors
2. Verify all file paths are correct
3. Ensure images are in the right format (JPG/PNG)
4. Test on different browsers and devices

---

**Your portfolio is ready to impress clients worldwide! 🌍**