import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="scrollview">
        <Header />
        <main id="main-layout">{children}</main>
        <Footer />
      </div>
    </>
  );
}
