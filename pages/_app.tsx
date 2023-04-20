import Layout from '@/components/Layout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import ErrorBoundary from '@/components/ErrorBoundary';

import { wrapper } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';

function App({ Component, pageProps }: AppProps) {
  const stores: any = useStore();

  return (
    <PersistGate persistor={stores.__persistor} loading={<div>Loading</div>}>
      <Layout>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Layout>
    </PersistGate>
  );
}

export default wrapper.withRedux(App);
