import DefaultLayout from "../layouts/default";
import ProductSection from "../components/ProductSection";
import ProductItemSection from "../components/ProductItemSection";


export default function ProductPage() {
  return (
    <DefaultLayout>
      <ProductSection />
      <ProductItemSection title={"Potrebbero piacerti anche"} />
      <ProductItemSection title={"Novità"} />
    </DefaultLayout>
  );
}
