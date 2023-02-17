import { Tag, TagConfigs, Tags } from '@/components';
import Head from 'next/head';

export const Landing = () => {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name='description' content='Application landing page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div>Welcome to the landing page!</div>
        {Tags.HIGH}
        {Tags.MEDIUM}
        {Tags.LOW}
        {Tags.NONE}
        <Tag config={TagConfigs.GREEN}>Paid</Tag>
        <Tag config={TagConfigs.BLUE}>Open</Tag>
      </main>
    </>
  );
};
