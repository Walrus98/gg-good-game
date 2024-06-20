import Navbar from "../components/Navbar";
import ProductItemSection from "../components/ProductItemSection";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";


export default function ProductPage() {
  return (
    <>
      <Navbar />
      <ProductSection />
      <ProductItemSection title={"Potrebbero piacerti anche"} />
      <ProductItemSection title={"Novità"} />
      <Footer />
    </>
  );
}
