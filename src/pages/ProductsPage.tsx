import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductItemGrid from "../components/ProductItemGrid";
import ProductFilter from "../components/ProductFilter";


export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <section className="flex justify-center mt-14">
        <div className="flex max-w-screen-xl gap-4">
          <ProductFilter />
          <ProductItemGrid />
        </div>
      </section>
      <Footer />
    </>
  );
}
