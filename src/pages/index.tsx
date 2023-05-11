import { Attribution, InteractiveRating } from 'components';
import { type NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive rating component</title>
        <meta
          name='description'
          content='Interactive rating component'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
      </Head>
      <main>
        <InteractiveRating />
        <Attribution />
      </main>
    </>
  );
};

export default Home;
