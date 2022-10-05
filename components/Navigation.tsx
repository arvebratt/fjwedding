import React, { Children, ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Button from "./Button";
import Router from "next/router";
import { Routes } from "../util/types";

interface NavigationProps {
  active: Routes;
}

const Navigation: React.FC<NavigationProps> = ({ active, children }) => {
  return (
    <div>
      <Head>
        <title>hej</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className="grid grid-cols-10 p-2">
          <div className="col-span-5 flex gap-1">
            <Button
              label={"Hem"}
              type={"secondary"}
              onClick={() => Router.push(`/${Routes.home}`)}
            />
            <Button
              label={"Information"}
              type={"secondary"}
              onClick={() => Router.push(`/${Routes.info}`)}
            />
            <Button
              label={"Musik"}
              type={"secondary"}
              onClick={() => Router.push(`/${Routes.music}`)}
            />
            <Button
              label={"Önskelista"}
              type={"secondary"}
              onClick={() => Router.push(`/${Routes.registry}`)}
            />
            <Button
              label={"Bilder"}
              type={"secondary"}
              onClick={() => Router.push(`/${Routes.images}`)}
            />
          </div>
          <div className="col-start-9 col-end-11 flex gap-1">
            <Button label={"OSA"} type={"primary"} />
            <Button label={"Logga ut"} type={"primary"} />
          </div>
        </nav>
      </header>
      {children}
      <footer className="absolute bottom-0 bg-zinc-600 w-full text-white text-center p-1">
        <span>
          Kontakta{" "}
          <a href="mailto: toastmaster@fjwedding.se">
            toastmaster@fjwedding.se
          </a>{" "}
          om du har några frågor
        </span>
      </footer>
    </div>
  );
};

export default Navigation;
