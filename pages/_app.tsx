import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { useStore } from 'react-redux';
import { wrapper, persistor } from '@/store/store';
import { useMemo } from 'react';
import Layout from '@/components/Layout';
import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import { store } from '@/store/store';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore();

  wrapper.useWrappedStore(useMemo(() => store, [store]));
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>Loading</div>}>
        <Layout>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
