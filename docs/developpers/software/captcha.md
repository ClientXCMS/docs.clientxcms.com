---
translated: true
---
# Captcha

This page explains how to configure reCAPTCHA, hCaptcha, and Cloudflare Turnstile captchas in your client area.

## reCAPTCHA (Google)

### Step 1: Create a reCAPTCHA project
1. Go to the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create).
2. Sign in with your Google account.
3. Click the **+** button to create a new reCAPTCHA project.

### Step 2: Configure the project
1. Give your project a **name**.
2. Select the type of reCAPTCHA you want to use:
   - **reCAPTCHA v2**: check "I'm not a robot" or "Invisible reCAPTCHA badge".
   - **reCAPTCHA v3**: no direct user interaction.
3. Enter the **domains** where you will use reCAPTCHA.
4. Accept the **Terms of Service**.

### Step 3: Retrieve the keys
1. Once the project is created, you will receive two keys:
   - **Site key**: to integrate on your HTML pages.
   - **Secret key**: used server-side to validate reCAPTCHA responses.

## hCaptcha

### Step 1: Create an hCaptcha account
1. Go to [hCaptcha](https://www.hcaptcha.com/).
2. Create an account or sign in if you already have one.

### Step 2: Add a new site
1. Access your **hCaptcha dashboard**.
2. Click **New site**.
3. Fill in the site details (site name, domain, etc.).

### Step 3: Retrieve the keys
1. After adding your site, hCaptcha will provide you with:
   - **Site key** (Sitekey): to integrate hCaptcha on your web pages.
   - **Secret key**: for server-side verification of hCaptcha responses.

## Cloudflare Turnstile

### Step 1: Create a Cloudflare account
1. Go to [Cloudflare](https://www.cloudflare.com/) and create an account (or sign in to an existing account).

### Step 2: Add Turnstile to your domain
1. Go to the Cloudflare dashboard.
2. Select your site under **Sites**.
3. Navigate to **Security** > **Bots** > **Turnstile**.
4. Click **Create a new Turnstile widget**.

### Step 3: Retrieve the keys
1. Cloudflare will generate two keys for your Turnstile widget:
   - **Site key**: to add Turnstile to your forms.
   - **Secret key**: for validating responses on your server.

## Conclusion

You can now add these keys to your client area to activate the captcha of your choice.
