import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="possum-banner.ico"></link> 
        <title>AAAAAAH</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
