import Layout from '@/components/Layout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Layout>
  );
}
