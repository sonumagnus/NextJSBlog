import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({
  title,
  keywords,
  description,
  children,
  categories,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header categories={categories} />
      <main className="px-6 md:px-16 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title:
    "Wikiflare.com | Latest Tech News | Tech Product Reviews | Esports News",
  keywords: "Tech, Gaming, Top Best Products",
  description:
    "Read Trendy Tech News, Product Reviews, Gaming Updates and E-Sports News All in One Place",
};
