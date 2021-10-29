
import { Reset } from 'styled-reset';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
