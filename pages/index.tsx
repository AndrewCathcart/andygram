import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <div className=''>
      <Head>
        <title>andygram</title>
        <link rel='icon' href='/instagram.ico' />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}

      {/* Modal */}
    </div>
  );
}

export default Home;
