khays# Miles of Smiles Montessori Website

A clean, responsive, and static website for Miles of Smiles Montessori in Bulawayo, Zimbabwe.

## 📁 Project Structure

*   `index.html`: Home page
*   `about.html`: About Us page
*   `programs.html`: Details on Montessori programs
*   `gallery.html`: Photo gallery (uses images from `/images` folder)
*   `parents.html`: Parent resources and interactive Matching Game
*   `tour.html`: Request a Tour page (Google Form placeholder)
*   `contact.html`: Contact & Registration page (Google Form placeholders)
*   `styles.css`: All visual styles, colors, and responsive layout
*   `script.js`: Logic for the matching game and newsletter form
*   `images/`: Folder containing site images

## 🎨 Branding Colors

*   **Magenta**: `#d81b60`
*   **Navy**: `#0b1f4f`
*   **Yellow**: `#ffd54f`
*   **White**: `#ffffff`

## 🚀 How to Deploy to GitHub Pages

1.  **Create a Repository:**
    *   Go to [GitHub.com](https://github.com) and sign in.
    *   Click the **+** icon in the top right and select **New repository**.
    *   Name it `miles-of-smiles-website` (or similar).
    *   Make it **Public**.
    *   Click **Create repository**.

2.  **Upload Files:**
    *   In your new repository, click **uploading an existing file**.
    *   Drag and drop ALL the files from this folder (`index.html`, `styles.css`, `script.js`, `images/` folder, etc.) into the browser window.
    *   Wait for them to finish uploading.
    *   In the "Commit changes" box, type "Initial site upload" and click **Commit changes**.

3.  **Enable GitHub Pages:**
    *   Go to the **Settings** tab of your repository.
    *   On the left sidebar, click **Pages**.
    *   Under "Build and deployment", select **Deploy from a branch**.
    *   Under "Branch", select `main` (or `master`) and folder `/ (root)`.
    *   Click **Save**.

4.  **Visit Your Site:**
    *   Wait a minute or two. Refresh the page.
    *   You will see a link at the top (e.g., `https://yourusername.github.io/miles-of-smiles-website/`).
    *   Click it to see your live website!

## 📝 How to Add Google Forms

To make the "Request a Tour" and "Contact" forms work, you need to create Google Forms and paste their embed codes.

1.  **Create the Form:**
    *   Go to [Google Forms](https://forms.google.com).
    *   Create a new form (e.g., "Tour Request").
    *   Add your questions (Name, Email, Phone, Child's Age, etc.).

2.  **Get the Embed Code:**
    *   Click the **Send** button (top right).
    *   Click the **< >** icon (Embed HTML).
    *   Copy the code that looks like `<iframe src="...">`.

3.  **Update the Website File:**
    *   Open `tour.html` (for Tour form) or `contact.html` (for Contact/Registration forms) in your code editor.
    *   Find the comment `<!-- INSTRUCTIONS: ... -->`.
    *   Replace the `<iframe src="about:blank" ...>` line with the code you copied from Google.
    *   *Tip:* You can adjust the `height="600"` to make it fit better if needed.

4.  **Save and Push:**
    *   Save the file.
    *   Upload the updated file to GitHub to publish the changes.

## 🎮 Game Logic

The matching game in `parents.html` runs via `script.js`. It uses standard emojis. To change the icons, edit the `emojis` array in `script.js`.
