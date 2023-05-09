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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
