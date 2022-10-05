import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Hem</a>
            </Link>
          </li>
          <li>
            <Link href="/info">
              <a>Info</a>
            </Link>
          </li>
          <li>
            <Link href="/music">
              <a>Musik</a>
            </Link>
          </li>
          <li>
            <Link href="/registry">
              <a>Önskelista</a>
            </Link>
          </li>
          <li>
            <Link href="/photos">
              <a>Bilder</a>
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
