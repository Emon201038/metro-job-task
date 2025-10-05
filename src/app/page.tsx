import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Main from "@/components/main";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-r from-[rgb(13,4,20)] via-[rgb(13,4,20)] via-[rgba(13,4,20,0.9)] to-[rgb(13,4,20)]">
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
