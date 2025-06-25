# Progressive Web Apps (PWA) – What, Why, and How

## What is a PWA?

A **Progressive Web App (PWA)** is a modern type of web application that combines the reach of the web with features previously only available to native desktop or mobile apps.

Technically, a PWA is a standard website enhanced by:

- A **manifest file** that defines metadata (name, icon, start URL, display mode)
- A **service worker**, which allows offline use and caching
- HTTPS (required for service worker functionality)

When installed, a PWA runs in its own window without browser UI, supports background updates, and can be launched like any other app.

---

## Why use PWAs?

- **No installation rights required** – installed via browser
- **Platform-independent** – works on Windows, macOS, Linux, Android, etc.
- **Offline support** – if implemented correctly, the app works without an internet connection
- **Auto-updates** – updated silently when new versions are available
- **No App Store needed** – distribution is as simple as sharing a URL

In short: PWAs are ideal for lightweight tools, internal apps, and cross-platform utilities without the overhead of packaging, installation, or native development.

---

## How to install a PWA

To install a PWA, open it in a supported browser. Most Chromium-based browsers support PWAs natively.

Progressive Web Apps (PWAs) cannot be installed in Firefox, because Mozilla decided that modern web technology is just a fad. But don’t worry – you can always leave the tab open forever and pretend that’s just as good. It’s not.

### In Google Chrome

1. Open the PWA URL in Chrome
2. If the site meets PWA requirements, an install button appears in the address bar
3. Alternatively, open the menu (three dots) and click  
   **"Install..."** or **"Install app"**

### In Microsoft Edge (Chromium-based)

1. Open the PWA URL
2. Go to the menu → **"Apps"** → **"Install this site as an app"**

### In Vivaldi

1. Open the PWA URL
2. Go to the menu → **"Tools"** → **"Install Web App"**  
   (Note: Vivaldi might not always show an install prompt)

---

## Requirements

- A Chromium-based browser (Chrome, Edge, Brave, Vivaldi, etc.)
- HTTPS hosting
- A valid manifest and registered service worker
- A secure context (no mixed content)

---

## Troubleshooting

- If the app cannot be installed:
  - Check that it uses HTTPS
  - Verify that the manifest and service worker are correctly configured
  - Clear browser cache or perform a hard reload (`Ctrl + Shift + R`)
  - Use Developer Tools → Application tab to debug PWA setup

---

## Summary

PWAs provide a flexible, installable app experience without the complexity of native development or deployment.  
They are a practical choice for modern internal tools, utilities, dashboards, and more.
