<h1>
  <a href="https://serdargokhan.dev" target="_blank">serdargokhan.dev</a>
</h1>

<p>
✨ My portfolio website built with <a href="https://nextjs.org" target="_blank">NextJS</a>, <a href="https://tailwindcss.com" target="_blank">TailwindCSS</a>, and shipped with <a href="https://vercel.com" target="_blank">Vercel</a>.
</p>

![Image 1](./public/opengraph-image.jpg)

## 🛠 Installation & Set Up

This application requires Node.js v20.19+ or v22.12+.

1. Clone the repository

    ```sh
    git clone https://github.com/serdargokhan/serdargokhan.dev.git
    ```

2. Navigate into the directory

    ```sh
    cd serdargokhan.dev
    ```

3. Install dependencies

    ```sh
    pnpm install
    ```

4. Start the development server

    ```sh
    pnpm dev
    ```

## 🚀 Building and Running for Production

1. Generate a production build

    ```sh
    pnpm build
    ```

2. Preview the site as it will appear once deployed

    ```sh
    pnpm start
    ```

## 📁 Folder Structure

```
serdargokhan.dev
├── public
│   ├── images
│   │   ├── common
│   │   └── pages
│   │       └── home
│   └── static
├── src
│   ├── app
│   │   ├── [locale]
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components
│   │   ├── common
│   │   ├── pages
│   │   │   └── home
│   │   │       ├── about-section
│   │   │       ├── contact-section
│   │   │       ├── greeting-section
│   │   │       └── portfolio-section
│   │   └── ui
│   ├── i18n
│   ├── icons
│   ├── layouts
│   │   ├── footer
│   │   └── navbar
│   ├── types
│   └── utils
└── translations
```
