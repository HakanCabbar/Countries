import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "src/context/themeContext";
import Layout from "src/layout";
import { NextComponentType, NextPageContext } from "next";

export interface MyAppProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

const App = ({ Component, pageProps }: MyAppProps) => {
  return (
    <ThemeProvider>
      <Layout Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
};

export default App;
