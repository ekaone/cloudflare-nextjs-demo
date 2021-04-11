import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cloudflare</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Cloudflare page..</a>
        </h1>

        <div className={styles.grid}>
          <a
            href="https://developers.cloudflare.com/pages/"
            className={styles.card}
          >
            <h3>Documentation Cloudflare page&rarr;</h3>
            <p>Find in-depth information about Cloudflare page features.</p>
          </a>

          <a
            href="https://developers.cloudflare.com/pages/getting-started"
            className={styles.card}
          >
            <h3>Get started &rarr;</h3>
            <p>
              In this guide, you'll get started with Cloudflare Pages, and
              deploy your first website to the platform.
            </p>
          </a>

          <a
            href="https://developers.cloudflare.com/pages/how-to"
            className={styles.card}
          >
            <h3>How to &rarr;</h3>
            <p>Discover and deploy deploy your app.</p>
          </a>

          <a
            href="https://developers.cloudflare.com/pages/tutorials"
            className={styles.card}
          >
            <h3>Tutorials &rarr;</h3>
            <p>Some tutorial Cloudflare page.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
