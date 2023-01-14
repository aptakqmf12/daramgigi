import React from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import styled from "styled-components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>Darangigi</title>
        <meta name="description" content="다람지지" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main.wrap>{children}</main.wrap>
      <Footer />
    </div>
  );
}

const main = {
  wrap: styled.main`
    min-height: 100vh;
  `,
};
