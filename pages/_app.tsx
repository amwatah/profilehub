import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import AppLayout from "../components/layout/AppLayout";
import { useAtom } from "jotai";
import { activeThemeAtom } from "../store";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [activeTheme] = useAtom(activeThemeAtom);

  return (
    <>
      <Head>
        <title>Amwatah</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className="app  w-screen min-h-screen overflow-x-hidden">
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: activeTheme,
            white: "#F5F8FF",
            colors: {
              dark: [
                "#D2CBDD",
                "#785EA3",
                "#473269",
                "#2A1A45",
                "#190C2E",
                "#0E041F",
                "#080015",
                "#080015",
                "#010102",
                "#000001",
              ],
            },
          }}
        >
          <ModalsProvider>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </ModalsProvider>
        </MantineProvider>
      </div>
    </>
  );
}
