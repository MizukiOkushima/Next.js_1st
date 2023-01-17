# Next.js_1st
### 概要
ReactのフレームワークであるNext.jsを試してみる。<br>

### Next.jsが必要な理由
Reactはページ読み込み時に白紙のページを読み込みJSが読み込まれる。<br>
Next.jsはページ読み込み時にHTMLが読み込まれる（前の時点で読み込むプリレンダリング → SSG, SSR(ISR)）<br>
その後にJSが読み込まれる。<br>

#### プリレンダリングをする目的
1. SEO対策になる。<br>
HTMLが最初に読み込まれることでウェブクローラーが巡回しやすいためGoogleの検索上位になり得る。<br>

2. ユーザーエクスペリエンスの向上<br>
ページが速く読み込まれる<br>
必要なJSだけ読み込まれページが軽くなる<br>

### 環境作成
1. Next.jsで環境作成する。<br>
`npx create-next-app next-app`<br>

2. ローカルサーバーを立てる。<br>
`next dev`<br>

### Next.jsの基本
エントリーポイントは`pages/index.js`<br>
`pages/_app.js`が根本でAPPのComponent, pagePropsを受け取ってindex.jsが映し出されている<br>
`pages/_app.js`で`import '@/styles/globals.css'`を読み込んでいるので全てのページで読み込まれる<br>


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
