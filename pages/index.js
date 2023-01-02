import Header from "../components/Header";
import Card from "../components/Card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../components/Footer";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <div>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Card />
      </QueryClientProvider>
      <Footer/>
    </div>
  );
}
