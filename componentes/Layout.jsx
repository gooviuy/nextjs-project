import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Layout({ children, title, description }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title} </title>
        <meta name="description" content={description} />
      </Head>
      <nav>Navbar</nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

Layout.defaultProps = {
  title: "Next.js / first try",
  description: "My first try using Next.js",
};
