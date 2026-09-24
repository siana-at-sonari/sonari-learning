# Sonari Learning website

Your site, set up so you can edit all the text in a dashboard at `your-site-address/admin`, with no code.

How it works: your words live in the content files in `src/_data/`. When you press **Publish** in the dashboard, the change is saved to GitHub, and Netlify rebuilds the site automatically in about a minute.

This version needs GitHub. It can't be dragged into Netlify like the earlier zip, because Netlify has to build it.

---

## One-time setup (about 30 minutes)

### 1. Put the files on GitHub
1. Create a free account at github.com.
2. Click **New repository**. Name it exactly `sonari-learning` (the dashboard is set up to look for that name). Private or public both work. Click **Create repository**.
3. On the next screen, click **uploading an existing file**. Drag in everything inside this folder (the `src` folder and all the files next to it), then click **Commit changes**.

### 2. Connect Netlify to GitHub
1. In Netlify, choose **Add new site > Import an existing project > GitHub**, then pick `sonari-learning`.
2. Leave the build settings as they are (they're already filled in) and click **Deploy**.
3. Note your site's address, for example `sonari-learning.netlify.app`.

### 3. Let the dashboard log you in with GitHub
1. On GitHub, go to **Settings > Developer settings > OAuth Apps > New OAuth App**.
   - Application name: `Sonari Learning editor`
   - Homepage URL: your Netlify site address, starting with `https://`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
2. Click **Register application**. Copy the **Client ID**, then click **Generate a new client secret** and copy it.
3. In Netlify, open your site, find **Access & security > OAuth**, and install an authentication provider: choose **GitHub** and paste the Client ID and secret.

### 4. Turn on the contact form
In Netlify, find **Forms** in your site's settings and enable form detection. Then trigger a new deploy (**Deploys > Trigger deploy**).

### 5. Add your domain
In Netlify, open **Domain management** and add your custom domain.

---

## Editing your site

1. Go to `your-site-address/admin` and log in with GitHub.
2. Choose a page, change the text, and click **Publish**.
3. Wait about a minute, then refresh your site.

**Site settings** holds your booking link, email, LinkedIn, and footer.
**Services page** holds your prices. The home page cards update automatically from there.
**Testimonials** have a "Show on site" switch on the Home page and the Fast Focus case study.
To change your photo, click the Photo field on the Home or About page and upload a new image.

## Fill these in before sharing the site
- Booking link (Site settings)
- Prices, shown as `[$X]` (Services page)
- Response times, shown as `[2]` and `[3]` (Book a call page)
- LMS platforms in the FAQ (Services page)
- Your photo (Home and About)
