import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";
import Navbar from "./layout/Navbar";
import { useOptionalUser } from "./utils";
import Header from "./layout/anon/Header";
import Footer from "./layout/anon/Footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderArgs) => {
  console.log({ user: await getUser(request) })
  return json({ user: await getUser(request) });
};

export default function App() {
  const {user} = useLoaderData();
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="w-full h-full">
        {
          user ? <div>
            <Navbar />
            <div className="w-full h-auto max-w-7xl p-10 mx-auto">
              <div className="bg-white shadow-sm">
                <Outlet />
              </div>
            </div>
          </div> :
            <div className="font-display max-w-7xl mx-auto w-full">
              <Header />
              <Outlet />
              <Footer />
            </div>
        }

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
