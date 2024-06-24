import { Navbar } from "../components/Navbar";
import BannerSlider from "../components/BannerSlider";
import DefaultLayout from "../layouts/default";
import ProductItemSection from "../components/ProductItemSection";


export default function IndexPage() {
  return (
    <>
      <DefaultLayout>
        <BannerSlider />
        <ProductItemSection title={'Ultime uscite'} />
        <ProductItemSection title={'Giochi di Carte'} />
        <ProductItemSection title={'Wargames'} />
      </DefaultLayout>
    </>
  );
}
