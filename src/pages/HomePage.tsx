import Navbar from "../components/Navbar";
import ProductItemSection from "../components/ProductItemSection";
import Footer from "../components/Footer";
import BannerSlider from "../components/BannerSlider";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <BannerSlider />
      <ProductItemSection title={'Ultime uscite'} />
      <ProductItemSection title={'Giochi di Carte'} />
      <ProductItemSection title={'Wargames'} />
      <Footer />
    </>
  );
}
