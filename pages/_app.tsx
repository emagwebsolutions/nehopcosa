import { Provider } from 'react-redux';
import Layout from '@/components/Layout';
import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import { store } from '@/store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        <Layout>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Layout>
    </Provider>
  );
}

export default MyApp;
