import Head from "next/head";
import styles from "../styles/Home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucy Awrey&apos;s Personal Site</title>
        <meta name="description" content="Lucy Awrey's personal site, it's currently under construction." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This site is currently under construction.
        </h1>
      </main>
    </div>
  )
}

export default Home;
