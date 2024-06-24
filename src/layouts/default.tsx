import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout({ children, }: { children: React.ReactNode; }) {
  return (

    <div className="relative flex flex-col">
      <Navbar />
      <main>
        {children}
      </main>
      <footer className="w-full flex justify-center mt-14 bg-content1 rounded-2xl">
        <Footer />
      </footer>
    </div>
  );
}

// footer: <section className="flex justify-center mt-14 bg-content1 rounded-2xl">
// main: container mx-auto max-w-7xl px-6 flex-grow pt-16