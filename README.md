# Miles of Smiles Montessori Website

A clean, responsive, and fully functional static website for Miles of Smiles Montessori in Bulawayo, Zimbabwe.

## 🌟 Features

### ✅ Implemented Features

- **📸 Photo Gallery with Lightbox**: Interactive gallery with full-screen image viewing
- **📧 Contact Forms**: Registration, callback request, and tour booking forms with mailto functionality
- **🔍 SEO Optimized**: Unique meta titles and descriptions for all pages
- **📱 Responsive Design**: Mobile-friendly layout with hamburger menu
- **🎮 Interactive Memory Game**: Educational matching game for parents and children
- **🎨 Component Architecture**: Reusable header and footer components
- **🎠 Hero Carousel**: Auto-playing image carousel on homepage

### 📄 Pages

- **Home** (`index.html`): Hero carousel, welcome message, and call-to-action
- **About** (`about.html`): Comprehensive information about philosophy and approach
- **Programs** (`programs.html`): Details on Montessori curriculum areas
- **Gallery** (`gallery.html`): Photo gallery with lightbox functionality
- **Parents** (`parents.html`): Resources and interactive matching game
- **Contact** (`contact.html`): Registration and callback request forms
- **Tour** (`tour.html`): School tour booking form

## 🎨 Branding Colors

- **Magenta**: `#d81b60`
- **Navy**: `#0b1f4f`
- **Yellow**: `#ffd54f`
- **White**: `#ffffff`

## 📁 Project Structure

```
miles-of-smiles-website/
├── index.html              # Home page with carousel
├── about.html              # About page
├── programs.html           # Programs page
├── gallery.html            # Photo gallery with lightbox
├── parents.html            # Parent resources + memory game
├── contact.html            # Contact forms
├── tour.html               # Tour booking form
├── styles.css              # All styles and responsive design
├── script.js               # Interactive features and form logic
├── components/
│   ├── header.html         # Reusable header component
│   └── footer.html         # Reusable footer component
└── images/                 # Site images and gallery photos
```

## 🚀 Local Development

To run the website locally:

```bash
# Navigate to project directory
cd miles-of-smiles-website

# Start a local server (Python 3)
python3 -m http.server 8000

# Or use Python 2
python -m SimpleHTTPServer 8000

# Visit in browser
open http://localhost:8000
```

## 📧 Contact Form Configuration

All forms use the `mailto:` protocol to open the user's default email client with pre-filled information.

**Current email address**: `milesofsmiling@gmail.com`

To change the email address, update the following in `script.js`:
- Line 83: Registration form
- Line 102: Callback form
- Line 125: Tour form

## 🖼️ Gallery Management

To add/remove gallery images:

1. Add images to the `/images` folder
2. Update `gallery.html` (lines 15-30)
3. Add `<img>` tags with class `gallery-img`:
   ```html
   <img src="images/your-image.jpg" alt="Description" class="gallery-img">
   ```

## 🎮 Memory Game

The matching game in `parents.html` is powered by `script.js`. To customize:

- **Change icons**: Edit the `emojis` array (line 88 in `script.js`)
- **Adjust difficulty**: Add more pairs to the array

## 🔍 SEO

Each page has unique:
- `<title>` tags for browser tabs and search results
- `<meta name="description">` tags for search engine snippets

Example:
```html
<title>Miles of Smiles Montessori | Bulawayo Preschool & Kindergarten</title>
<meta name="description" content="Miles of Smiles Montessori in Bulawayo offers a nurturing, child-centered learning environment for kids aged 6 months to 6 years. Book a tour today!">
```

## 🌐 Deployment to GitHub Pages

1. **Create Repository**:
   - Go to [GitHub.com](https://github.com) and create a new repository
   - Name it `miles-of-smiles-website`
   - Make it **Public**

2. **Upload Files**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/miles-of-smiles-website.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Select **Deploy from a branch**
   - Choose `main` branch and `/ (root)` folder
   - Click **Save**

4. **Visit Your Site**:
   - Your site will be live at: `https://yourusername.github.io/miles-of-smiles-website/`

## 🛠️ Technical Details

### Component Loading
The header and footer are dynamically loaded using JavaScript's `fetch` API:
- Ensures consistent navigation across all pages
- Easy to update in one place

### Form Handling
Forms use the `mailto:` protocol:
- No backend required
- Works on all devices with email clients
- Data is sent via user's default email app

### Lightbox Implementation
Custom JavaScript lightbox:
- Click any gallery image to view full-screen
- Close with X button, background click, or Escape key
- Smooth animations for better UX

## 📱 Browser Compatibility

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Future Enhancements (Optional)

- [ ] Convert JPG images to WebP format for faster loading
- [ ] Add more animations and transitions
- [ ] Enhance memory game with difficulty levels
- [ ] Add testimonials section
- [ ] Implement dark mode

## 📞 Support

For questions or issues, contact: milesofsmiling@gmail.com

---

**Built with ❤️ for Miles of Smiles Montessori, Bulawayo**
