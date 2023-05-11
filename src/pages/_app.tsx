import { overpass } from 'fonts';
import { type AppProps } from 'next/app';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style
        jsx
        global>{`
        html {
          font-family: ${overpass.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
