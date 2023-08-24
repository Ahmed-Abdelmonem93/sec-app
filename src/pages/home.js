import React from "react";

import Header from "../comp/header";
import Footer from "../comp/footer";
import Main from "../comp/maincontent";
export default function Home() {
  return (
    <>
      <Header />

      <Main pageName="Home Page" />

      <Footer />
    </>
  );
}
