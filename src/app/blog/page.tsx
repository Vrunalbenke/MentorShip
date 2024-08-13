// pages/index.js
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col custom-gradient">
      <Navbar />

      <main className=" flex flex-col items-center justify-center flex-grow text-white text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Blogs coming <span className="text-purple-500">soon...</span>
        </h1>
      </main>

      <Footer />
    </div>
  );
}
