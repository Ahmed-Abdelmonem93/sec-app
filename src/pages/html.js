import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";

export default function Html() {
  return (
    <>
      <Header />

      <main>
        <h1 className="my-title">HTML Page </h1>
      </main>

      <Footer />
    </>
  );
}
