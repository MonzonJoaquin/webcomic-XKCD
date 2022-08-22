import Head from "next/head";
import { ReactNode } from "react";

import NavBar from '../components/navBar'

interface Props {
    children: ReactNode;
    title: string;
  }

function PageLayout({ children, title='WebComic XKCD'}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`WebComic XKCD - ${title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <header>{title}</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}

export default PageLayout;
