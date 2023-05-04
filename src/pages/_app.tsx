import { Header } from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ToastContainer />
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
