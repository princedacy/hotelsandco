import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../components/Footer";
import { useRouter } from 'next/router';


const queryClient = new QueryClient();

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Card router={router} />
      </QueryClientProvider>
      <Footer/>
    </div>
  );
}
