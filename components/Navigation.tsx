import React, { Children, ReactNode, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Button from "./Button";
import Router from "next/router";
import { Routes } from "../util/types";
import { useWindowDimensions } from "../util/helper_functions";
import Logo from "./Logo";
import { useAuth } from "../context/AuthUserContext";

interface NavigationProps {
  active: Routes;
}

const Navigation: React.FC<NavigationProps> = ({ active, children }) => {
  const { signOut } = useAuth();
  const screenSX = useWindowDimensions().width < 640;
  const [navState, setNavState] = useState<"open" | "closed">("closed");

  const pageNavigation = (
    <>
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
    </>
  );

  const ctaNavigation = (
    <>
      <Button label={"OSA"} type={"primary"} />
      <Button label={"Logga ut"} type={"primary"} onClick={signOut} />
    </>
  );

  return (
    <div>
      <Head>
        <title>FJ wedding</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        {screenSX ? (
          <div className="absolute w-full bg-violet-100">
            <div className="flex justify-between m-2">
              <Logo size="sm" />
              <div
                onClick={() =>
                  setNavState((currentState) =>
                    currentState === "open" ? "closed" : "open"
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 stroke-zinc-600 stroke-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`${
                navState === "open" ? "flex" : "hidden"
              } flex-col gap-2 m-2`}
            >
              {pageNavigation}
              {ctaNavigation}
            </div>
          </div>
        ) : (
          <nav className="grid grid-cols-10 p-2">
            <div className="col-span-5 flex gap-1">{pageNavigation}</div>
            <div className="col-start-9 col-end-11 flex gap-1">
              {ctaNavigation}
            </div>
          </nav>
        )}
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
