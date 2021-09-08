import Navigation from "./Navigation";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="container flex flex-1 justify-center mx-auto px-5 max-w-screen-lg">
        {children}
      </main>
      <Footer />
    </div>
  );
}
