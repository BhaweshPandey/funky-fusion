/* eslint-disable linebreak-style */
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { NavigationProgress } from '@mantine/nprogress';

import '@mantine/notifications/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';

import { useEffect, useState } from 'react';
import { theme } from '../theme';

//setting up store
import { i18nx } from '../i18n';

import { Header } from '@/components/modules/Landing-Page-5/Header/Header';
import {I18nProvider} from '../context/i18nContext';


export default function App({ Component, pageProps }: AppProps) {
 

  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Funky Fusion</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="We're the well known mobile app development company in kuwait who have experience and skilled team members who delivers the projects on time."
        />
        <link rel="canonical" href="https://landing.highpolar.in/" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="preload" as="image" href="/image/banner.webp" />
      </Head>
      <Notifications />
      <NavigationProgress aria-label="navigation" />
      <ModalsProvider>
     
      <I18nProvider>
              <Component {...pageProps} />
              </I18nProvider>
           
        
      </ModalsProvider>
    </MantineProvider>
  );
}
