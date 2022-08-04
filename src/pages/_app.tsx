import { ThemeProvider } from 'styled-components';
import Header from '../components/header';
import Layout from '../components/layout';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>

    </ThemeProvider>
  );
}

export default MyApp
