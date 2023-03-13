import React from "react";
import Head from "next/head";
import Image from "next/image";
0
import Navbar from "@/components/navbar";
import SearchBar from "@/components/SearchBar";
import Showcase from "@/components/Showcase";

import { supabase } from "../supabaseClient";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ teavikud_info }) => {
  return (
    <>
      <Head>
        <title>EVRI</title>
        <meta
          name="description"
          content="Elva Valla raamatukogude infosüsteem"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        ></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.searchBar}>
            <SearchBar />
          </div>
          <div className={styles.carousel}>
            {teavikud_info.map((teavik) => (
              <div className={styles.book}>
                <a href={`/teavik/${teavik.teavik_id}`}><img className={styles.book_img} src={teavik.pilt} /></a>
                <p class="" key={teavik.teavik_id}>
                  {teavik.pealkiri}
                </p>
                <p class="" key={teavik.teavik_id}>
                  {teavik.autor_nimi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
export async function getServerSideProps() {
  let { data } = await supabase.from("teavik_info").select();
  return {
    props: {
      teavikud_info: data,
    },
  };
}

export default Home;
