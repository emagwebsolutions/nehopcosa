import React from 'react';
import Head from 'next/head';

type Title = {
  title: string;
};

const Meta = ({ title }: Title) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Cleaning Service" />
      <meta name="keywords" content="Cleaning Service" />
      <link rel="icon" href="/favicon-16x16.PNG" />

      <title>{title}</title>
    </Head>
  );
};

export default Meta;
