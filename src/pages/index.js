import Head from "next/head";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.bg}>
          <Image src="/logo.svg" width={100} height={100} />
        </div>
        <div className={styles.container}>
          <div className={styles.searchBar}>
            <SearchBar />
          </div>
        </div>
      </main>
    </>
  );
}
