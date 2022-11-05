import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Committees from "../components/Committees";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DelTech MUN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Main />
      <Committees />
      <Footer />
    </div>
  )
}
