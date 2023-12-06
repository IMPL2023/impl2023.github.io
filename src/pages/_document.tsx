import data from '@/data';
import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link href="/logo.svg" rel="icon" />
        <link
          href="/rss.xml"
          rel="alternate"
          title="RSS"
          type="application/rss+xml"
        />
        <meta content="/og-image.png" property="og:image" />
        <meta content={data.keywords} name="keywords" />
        <link href="/manifest.json" rel="manifest" />
        <link href="/icon.png" rel="apple-touch-icon" />
        <meta content="#fff" name="theme-color" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
