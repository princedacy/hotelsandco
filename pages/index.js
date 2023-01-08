import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import CardWrapper from "../components/CardWrapper";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <CardWrapper router={router} />
      <Footer />
    </div>
  );
}
