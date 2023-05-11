import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang='en'
      dir='ltr'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
